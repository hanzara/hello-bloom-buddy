import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Upload, TrendingUp, Award } from "lucide-react";

const Results = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Results Management</h1>
          <p className="text-muted-foreground mt-1">Enter marks, approve results, and generate reports</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Import Marks
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Reports
          </Button>
        </div>
      </div>

      <Tabs defaultValue="entry" className="space-y-4">
        <TabsList>
          <TabsTrigger value="entry">Marks Entry</TabsTrigger>
          <TabsTrigger value="approval">Approval</TabsTrigger>
          <TabsTrigger value="reports">Report Cards</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="entry" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Enter Student Marks</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <Label>Select Term</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3">
                  <option>Term 1, 2025</option>
                  <option>Term 2, 2024</option>
                </select>
              </div>
              <div>
                <Label>Select Exam</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3">
                  <option>CAT 1</option>
                  <option>Mid Term</option>
                </select>
              </div>
              <div>
                <Label>Select Class</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3">
                  <option>Form 1A</option>
                  <option>Form 1B</option>
                </select>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Admission No.</TableHead>
                    <TableHead>Marks (Out of 100)</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Comments</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>ADM001</TableCell>
                    <TableCell>
                      <Input type="number" placeholder="0" className="w-20" />
                    </TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Input placeholder="Optional" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>ADM002</TableCell>
                    <TableCell>
                      <Input type="number" placeholder="0" className="w-20" />
                    </TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Input placeholder="Optional" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline">Save as Draft</Button>
              <Button>Submit for Approval</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="approval" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Pending Approvals</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Mathematics - Form 1A (CAT 1)</p>
                  <p className="text-sm text-muted-foreground">Submitted by Mr. Kamau • 35 students</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Review</Button>
                  <Button size="sm">Approve</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">English - Form 2B (CAT 1)</p>
                  <p className="text-sm text-muted-foreground">Submitted by Mrs. Wanjiru • 40 students</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Review</Button>
                  <Button size="sm">Approve</Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Generate Report Cards</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search student..." className="pl-9 w-64" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">John Doe - ADM001</p>
                  <p className="text-sm text-muted-foreground">Form 1A • Average: 75% • Position: 5</p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Jane Smith - ADM002</p>
                  <p className="text-sm text-muted-foreground">Form 1A • Average: 82% • Position: 2</p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                  <h3 className="text-2xl font-bold mt-1">72.5%</h3>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Top Performer</p>
                  <h3 className="text-lg font-bold mt-1">Mary Njeri</h3>
                </div>
                <Award className="w-8 h-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pass Rate</p>
                  <h3 className="text-2xl font-bold mt-1">94%</h3>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Subject Performance</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Mathematics</span>
                  <span className="text-sm text-muted-foreground">78%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '78%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">English</span>
                  <span className="text-sm text-muted-foreground">82%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '82%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Science</span>
                  <span className="text-sm text-muted-foreground">65%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }} />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Results;
