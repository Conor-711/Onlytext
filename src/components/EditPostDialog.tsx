import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Edit, X, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EditPostDialogProps {
  post: {
    id: string;
    content: string;
    relationship?: string;
  };
}

export const EditPostDialog = ({ post }: EditPostDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [story, setStory] = useState(post.content);
  const [relationship, setRelationship] = useState(post.relationship || '');
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

  const handleSave = () => {
    if (!story.trim()) {
      toast({
        title: "Story required",
        description: "Please add a story to your post.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would update the post in backend
    toast({
      title: "Post updated!",
      description: "Your post has been updated successfully.",
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2">
          <Edit className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Story Field */}
          <div className="space-y-2">
            <Label htmlFor="edit-story" className="text-sm font-medium">
              Story
            </Label>
            <Textarea
              id="edit-story"
              placeholder="Tell the story behind this chat..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>

          {/* Relationship Field */}
          <div className="space-y-2">
            <Label htmlFor="edit-relationship" className="text-sm font-medium">
              Relationship
            </Label>
            <Input
              id="edit-relationship"
              placeholder="e.g., Friend, Family, Colleague, Crush..."
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
            />
          </div>

          {/* Add More Images */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Add More Images
            </Label>
            
            <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                id="edit-image-upload"
              />
              <label
                htmlFor="edit-image-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <ImageIcon className="w-6 h-6 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to add more screenshots
                </p>
              </label>
            </div>

            {/* New Image Previews */}
            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-3">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview}
                      alt={`New image ${index + 1}`}
                      className="w-full h-20 object-cover rounded border border-border"
                    />
                    <Button
                      onClick={() => removeImage(index)}
                      variant="destructive"
                      size="sm"
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-primary hover:bg-primary-hover">
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};