import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Profile() {
  return (
    <div className="dark bg-muted text-muted-foreground min-h-dvh flex flex-col">
      {/* <header className="bg-card py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Update Profile</Button>
          <Button variant="destructive">Delete Profile</Button>
        </div>
      </header> */}
      <main className="flex-1  grid gap-6">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john@example.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="New York, NY" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                defaultValue="I'm a software engineer and I love to code!"
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" defaultValue="********" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                defaultValue="********"
              />
            </div>
          </CardContent>
        </Card>
        {/* <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" defaultValue="********" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                defaultValue="********"
              />
            </div>
          </CardContent>
        </Card> */}
      </main>
      <footer className=" py-4 px-6 flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Save Changes</Button>
      </footer>
    </div>
  );
}
