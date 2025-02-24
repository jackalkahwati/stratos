import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Webhook, Lock } from "lucide-react"

export function ApiDocs() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold">API Documentation</h1>
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <Code2 className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">Getting Started with Clone API</CardTitle>
                <CardDescription>Learn how to integrate Clone into your applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The Clone API allows you to:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Manage job profiles programmatically</li>
                  <li>Automate workspace switching</li>
                  <li>Access communication controls</li>
                  <li>Integrate with your existing tools</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="authentication">
            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">Authentication</CardTitle>
                <CardDescription>Secure your API requests</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clone uses API keys to authenticate requests. You can view and manage your API keys in your Clone
                  Dashboard.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="webhooks">
            <Card>
              <CardHeader>
                <Webhook className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">Webhooks</CardTitle>
                <CardDescription>Real-time event notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use webhooks to get notified about events in your Clone workspace in real-time.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

