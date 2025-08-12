"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Search, Filter, AlertCircle, Clock, FileCheck, Shield, Eye } from "lucide-react";

const verifications = [
  {
    id: "VER-001",
    patientName: "Adebayo Johnson",
    documentType: "Medical License",
    submittedDate: "2024-01-18",
    status: "Pending",
    priority: "High",
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: "VER-002",
    patientName: "Fatima Ibrahim",
    documentType: "Insurance Card",
    submittedDate: "2024-01-17",
    status: "Verified",
    priority: "Medium",
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: "VER-003",
    patientName: "Chinedu Okafor",
    documentType: "ID Verification",
    submittedDate: "2024-01-16",
    status: "Rejected",
    priority: "Low",
    avatar: "/placeholder-avatar.jpg"
  }
];

export function VerificationPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Document Verification</h1>
          <p className="text-muted-foreground">Review and verify patient documents and credentials</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 rounded-md">
          <FileCheck className="h-4 w-4 mr-2" />
          Bulk Verify
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-xl border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Submissions
            </CardTitle>
            <FileCheck className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-l-4 border-l-yellow-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Review
            </CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Verified
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Rejected
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search verifications..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <Button variant="outline" className="rounded-md">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Verification Queue */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Verification Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {verifications.map((verification) => (
              <div key={verification.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={verification.avatar} />
                    <AvatarFallback>{verification.patientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{verification.patientName}</h3>
                    <p className="text-sm text-muted-foreground">{verification.id} • {verification.documentType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">Submitted: {verification.submittedDate}</p>
                    <Badge 
                      variant={
                        verification.priority === 'High' ? 'destructive' : 
                        verification.priority === 'Medium' ? 'secondary' : 
                        'outline'
                      }
                      className="text-xs"
                    >
                      {verification.priority} Priority
                    </Badge>
                  </div>
                  <Badge 
                    variant={
                      verification.status === 'Verified' ? 'default' : 
                      verification.status === 'Pending' ? 'secondary' : 
                      'destructive'
                    }
                    className="flex items-center gap-1"
                  >
                    {verification.status === 'Verified' && <CheckCircle className="h-3 w-3" />}
                    {verification.status === 'Pending' && <Clock className="h-3 w-3" />}
                    {verification.status === 'Rejected' && <AlertCircle className="h-3 w-3" />}
                    {verification.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-md">
                      <Eye className="h-3 w-3 mr-1" />
                      Review
                    </Button>
                    {verification.status === 'Pending' && (
                      <>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-md">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Approve
                        </Button>
                        <Button variant="destructive" size="sm" className="rounded-md">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}