import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, FileText, Settings } from "lucide-react";

const Exams = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Examinations</h1>
          <p className="text-muted-foreground mt-1">Manage exams, schedules, and question papers</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Exam
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="papers">Question Papers</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Upcoming Exams</p>
                  <h3 className="text-2xl font-bold mt-1">5</h3>
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Terms</p>
                  <h3 className="text-2xl font-bold mt-1">1</h3>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Exams</p>
                  <h3 className="text-2xl font-bold mt-1">24</h3>
                </div>
                <Settings className="w-8 h-8 text-primary" />
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Current Academic Term</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Term Name:</span>
                <span className="font-medium">Term 1, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Start Date:</span>
                <span className="font-medium">Jan 6, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">End Date:</span>
                <span className="font-medium">Apr 4, 2025</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Exams</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">CAT 1 - Mathematics</p>
                  <p className="text-sm text-muted-foreground">Form 1A • Feb 15, 2025</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">CAT 1 - English</p>
                  <p className="text-sm text-muted-foreground">Form 2B • Feb 16, 2025</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Exam Timetable</h3>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Schedule
              </Button>
            </div>
            <p className="text-muted-foreground">Create and manage exam schedules, dates, and venues</p>
          </Card>
        </TabsContent>

        <TabsContent value="papers" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Question Papers</h3>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Upload Paper
              </Button>
            </div>
            <p className="text-muted-foreground">Securely manage exam question papers</p>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Exam Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Default Exam Weight</label>
                <p className="text-sm text-muted-foreground">Set default percentage weights for exam types</p>
              </div>
              <div>
                <label className="text-sm font-medium">Grading Scale</label>
                <p className="text-sm text-muted-foreground">Configure grading scale and remarks</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Exams;
