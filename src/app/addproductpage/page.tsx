"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Upload, X } from "lucide-react"

const tabs = [
  { id: "product", label: "Product" },
  { id: "packaging", label: "Packaging" },
  { id: "shipping", label: "Shipping" },
  { id: "other-details", label: "Other Details" },
]

export default function AddProductPage() {
  const [activeTab, setActiveTab] = useState("product")
  const [qualityAssured, setQualityAssured] = useState(true)
  const [productTags, setProductTags] = useState(["Cloth", "Q1"])

  const removeTag = (tagToRemove: string) => {
    setProductTags(productTags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            SupChain
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm">
              Profile →
            </Button>
            <Button variant="ghost" className="text-red-600 text-sm">
              Log Out
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <Card className="p-6">
          {activeTab === "product" && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="productName">Product Name</Label>
                <Input id="productName" placeholder="Tshirt, pants....." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="totalCost">Total Cost</Label>
                <Input id="totalCost" placeholder="in rupees..." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="gstNo">GST no.</Label>
                <Input id="gstNo" placeholder="Tshirt, pants....." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="billNo">Bill No.</Label>
                <Input id="billNo" placeholder="Tshirt, pants....." className="mt-1" />
              </div>

              <div>
                <Label>Product Tags</Label>
                <div className="flex gap-2 mt-2">
                  {productTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <button onClick={() => removeTag(tag)}>
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label>Product Images</Label>
                <p className="text-sm text-muted-foreground mb-2">Insert Product Images</p>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="qualityAssurance">Quality Assurance Certified?</Label>
                <Switch id="qualityAssurance" checked={qualityAssured} onCheckedChange={setQualityAssured} />
              </div>
            </div>
          )}

          {activeTab === "packaging" && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="packagingMaterial">Packaging Material</Label>
                <Input id="packagingMaterial" placeholder="Carton, bubble wrap" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="perPackageWeight">Per Package Weight</Label>
                <div className="flex gap-2 mt-1">
                  <Input id="perPackageWeight" placeholder="20kg, 40kg..." className="flex-1" />
                  <Select defaultValue="kg">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="g">g</SelectItem>
                      <SelectItem value="lb">lb</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="productType">Product Type</Label>
                <Input id="productType" placeholder="Fragile, hard, soft......" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="combinedWeight">Combined Weight</Label>
                <div className="flex gap-2 mt-1">
                  <Input id="combinedWeight" placeholder="20kg, 40kg..." className="flex-1" />
                  <Select defaultValue="kg">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="g">g</SelectItem>
                      <SelectItem value="lb">lb</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="cargoType">Cargo Type</Label>
                <Input id="cargoType" placeholder="Fragile, hard, soft......" className="mt-1" />
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="billOfLading">Bill of Lading Number</Label>
                <Input id="billOfLading" placeholder="084584290857879...." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="proNumber">PRO Number</Label>
                <Input id="proNumber" placeholder="084584290857879...." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="transportationMode">Transportation Mode</Label>
                <Input id="transportationMode" placeholder="Road, Air....." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="transporterId">Transporter ID</Label>
                <Input id="transporterId" placeholder="u0d89g80a8...." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="shippingReceipt">Shipping Receipt GST No.</Label>
                <Input id="shippingReceipt" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="estimatedTime">Estimated Time of Journey</Label>
                <div className="flex gap-2 mt-1">
                  <Input id="estimatedTime" placeholder="2,3, 20..." className="flex-1" />
                  <Select defaultValue="days">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="hours">Hours</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="otherDetails">Other details no mentioned above</Label>
                <Textarea id="otherDetails" placeholder="Fragile, hard, soft......" className="mt-1" />
              </div>
            </div>
          )}

          {activeTab === "other-details" && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="expiryDate">Date of Expiry of batch</Label>
                <Input id="expiryDate" placeholder="084584290857879...." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="uuid">UUID</Label>
                <Input id="uuid" placeholder="084584290857879...." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="customerName">Customer Name</Label>
                <Input id="customerName" placeholder="Road, Air....." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="customerAddress">Customer Address</Label>
                <Input id="customerAddress" placeholder="u0d89g80a8...." className="mt-1" />
              </div>

              <div>
                <Label htmlFor="platformName">Platform Name</Label>
                <Input id="platformName" className="mt-1" />
              </div>

              <div className="pt-4">
                <Button className="bg-slate-800 hover:bg-slate-900 text-white">Generate QR</Button>
              </div>
            </div>
          )}

          <div className="flex justify-center pt-8">
            <Button className="bg-slate-800 hover:bg-slate-900 text-white px-8">Create Product</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}