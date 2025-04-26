
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import { toast } from "sonner";

const AccountSettings = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const [profileImage, setProfileImage] = useState("/lovable-uploads/SeaShell.png");

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        toast.success("Profile photo updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Account Settings</h1>
        
        <div className="bg-white rounded-lg shadow divide-y divide-gray-100">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={profileImage} alt="Profile" />
                  <AvatarFallback>{userData.fullName?.substring(0, 2).toUpperCase() || "MD"}</AvatarFallback>
                </Avatar>
                <label 
                  htmlFor="profile-upload" 
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity"
                >
                  <Camera className="w-4 h-4 text-white" />
                  <input
                    type="file"
                    id="profile-upload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <div>
                <h2 className="text-base font-medium text-gray-900">
                  {userData.fullName || "Marry Doe"}
                </h2>
                <p className="text-sm text-gray-500">{userData.email || "Marry@Gmail.Com"}</p>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-gray-600">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
