import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, X, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreatePost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [story, setStory] = useState('');
  const [relationship, setRelationship] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const newImages = [...images, ...files];
    setImages(newImages);

    // Create preview URLs
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!story.trim()) {
      toast({
        title: "Story required",
        description: "Please add a story to your post.",
        variant: "destructive",
      });
      return;
    }

    if (images.length === 0) {
      toast({
        title: "Images required",
        description: "Please upload at least one chat screenshot.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would submit to backend
    toast({
      title: "Post created!",
      description: "Your post has been published successfully.",
    });
    
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">Create Post</h1>
          </div>
          <Button 
            onClick={handleSubmit}
            disabled={!story.trim() || images.length === 0}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold px-6 rounded-full"
          >
            Post
          </Button>
        </div>

        {/* Form */}
        <div className="p-4 space-y-6">
          {/* Story Field */}
          <div className="space-y-2">
            <Label htmlFor="story" className="text-sm font-medium">
              Story *
            </Label>
            <Textarea
              id="story"
              placeholder="Tell the story behind this chat..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>

          {/* Relationship Field */}
          <div className="space-y-2">
            <Label htmlFor="relationship" className="text-sm font-medium">
              Relationship
            </Label>
            <Input
              id="relationship"
              placeholder="e.g., Friend, Family, Colleague, Crush..."
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Chat Screenshots *
            </Label>
            
            {/* Upload Button */}
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <ImageIcon className="w-8 h-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload chat screenshots
                </p>
                <p className="text-xs text-muted-foreground">
                  Upload at least 1 image
                </p>
              </label>
            </div>

            {/* Image Previews */}
            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mt-4">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border border-border"
                    />
                    <Button
                      onClick={() => removeImage(index)}
                      variant="destructive"
                      size="sm"
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;