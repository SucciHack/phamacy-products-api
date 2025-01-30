"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Pill, Info, Code, FileJson } from "lucide-react"

export default function PharmacyApiDocs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pharma-50 to-white text-pharma-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Introduction />
        <div className="space-y-8">
          <ApiEndpoint
            title="Get All Pharmaceuticals"
            method="GET"
            endpoint="https://phamacy-products-api.vercel.app/api/v1/products"
            description="Retrieve a list of all available pharmaceuticals."
            responseExample={`
  {
    "data":[
        {
            "id": "679b70645ca317ec1008218f",
            "productName": "Microscope",
            "price": 900,
            "quantity": 5,
            "color": "White",
            "image": "https://utfs.io/f/GKUQqZhApnODHO1MXwn0FsXjP4ikNT5Wrqvt1xKUSOMw6f3y",
            "createdAt": "2025-01-30T12:28:17.731Z",
            "updatedAt": "2025-01-30T12:28:17.731Z"
        },
        {
            "id": "679b70ac5ca317ec10082190",
            "productName": "Pain Killers",
            "price": 1200,
            "quantity": 10,
            "color": "Blue",
            "image": "https://utfs.io/f/GKUQqZhApnODxfSQniaSnGAqLOCl3iue41UwZrpV2cRt8B5Y",
            "createdAt": "2025-01-30T12:29:32.567Z",
            "updatedAt": "2025-01-30T12:29:32.567Z"
    }
]
        }`}
          />
          <ApiEndpoint
            title="Get Pharmaceutical by ID"
            method="GET"
            endpoint="https://phamacy-products-api.vercel.app/:id"
            description="Retrieve details of a specific pharmaceutical by its ID."
            responseExample={`
{
            "id": "679b70ac5ca317ec10082190",
            "productName": "Pain Killers",
            "price": 1200,
            "quantity": 10,
            "color": "Blue",
            "image": "https://utfs.io/f/GKUQqZhApnODxfSQniaSnGAqLOCl3iue41UwZrpV2cRt8B5Y",
            "createdAt": "2025-01-30T12:29:32.567Z",
            "updatedAt": "2025-01-30T12:29:32.567Z"
        }`}
          />
          <ApiEndpoint
            title="Create New Pharmaceutical"
            method="POST"
            endpoint="https://phamacy-products-api.vercel.app/api/v1/products"
            description="Add a new pharmaceutical to the inventory."
            requestExample={`
{
            "productName": "Pain Killers",
            "price": 1200,
            "quantity": 10,
            "color": "Blue",
            "image": "https://utfs.io/f/GKUQqZhApnODxfSQniaSnGAqLOCl3iue41UwZrpV2cRt8B5Y",
        }`}
            responseExample={`
{
            "id": "679b70ac5ca317ec10082190",
            "productName": "Pain Killers",
            "price": 1200,
            "quantity": 10,
            "color": "Blue",
            "image": "https://utfs.io/f/GKUQqZhApnODxfSQniaSnGAqLOCl3iue41UwZrpV2cRt8B5Y",
            "createdAt": "2025-01-30T12:29:32.567Z",
            "updatedAt": "2025-01-30T12:29:32.567Z"
        }`}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="bg-gradient-to-r from-pharma-600 to-pharma-700 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4 flex items-center">
        <Pill className="w-10 h-10 mr-4" />
        <h1 className="text-3xl font-bold">Pharmacy API Documentation</h1>
      </div>
    </header>
  )
}

function Introduction() {
  return (
    <section className="mb-12 bg-white rounded-lg shadow-md p-6 bg-gradient-to-br from-white to-pharma-50">
      <h2 className="text-2xl font-semibold mb-4 text-pharma-800 flex items-center">
        <Info className="w-6 h-6 mr-2 text-pharma-600" />
        Introduction
      </h2>
      <p className="mb-4 text-pharma-700">
        Welcome to the Pharmacy API documentation. This API allows you to interact with our pharmaceutical inventory,
        retrieve information about medications, and manage orders.
      </p>
      <div className="bg-gradient-to-r from-pharma-100 to-pharma-200 p-4 rounded-md">
        <p className="mb-2 font-semibold text-pharma-800">Base URL:</p>
        <code className="bg-white px-2 py-1 rounded text-pharma-600 font-mono">https://phamacy-products-api.vercel.app</code>
      </div>
      <div className="mt-4 bg-gradient-to-r from-pharma-100 to-pharma-200 p-4 rounded-md">
        <p className="mb-2 font-semibold text-pharma-800">Authentication:</p>
        <p className="mb-2">All requests must include an API key in the header:</p>
        <code className="bg-white px-2 py-1 rounded text-pharma-600 font-mono">X-API-Key: your_api_key_here</code>
      </div>
    </section>
  )
}

interface ApiEndpointProps {
  title: string
  method: "GET" | "POST" | "PUT" | "DELETE"
  endpoint: string
  description: string
  requestExample?: string
  responseExample: string
}

function ApiEndpoint({ title, method, endpoint, description, requestExample, responseExample }: ApiEndpointProps) {
  return (
    <div className="border border-pharma-200 rounded-lg p-6 bg-gradient-to-br from-white to-pharma-50 shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-pharma-800">{title}</h3>
      <div className="flex items-center gap-3 mb-3">
        <Badge variant={method === "GET" ? "secondary" : "destructive"} className="text-sm px-3 py-1">
          {method}
        </Badge>
        <code className="bg-pharma-100 px-3 py-1 rounded text-pharma-700 font-mono text-sm">{endpoint}</code>
      </div>
      <p className="mb-4 text-pharma-700">{description}</p>
      <Accordion type="single" collapsible className="w-full">
        {requestExample && (
          <AccordionItem value="request">
            <AccordionTrigger className="text-pharma-700 hover:text-pharma-900">
              <div className="flex items-center">
                <Code className="w-5 h-5 mr-2 text-pharma-600" />
                Request Example
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <pre className="bg-gradient-to-r from-pharma-50 to-white p-4 rounded-lg overflow-x-auto border border-pharma-200">
                <code className="text-pharma-800 font-mono text-sm">{requestExample}</code>
              </pre>
            </AccordionContent>
          </AccordionItem>
        )}
        <AccordionItem value="response">
          <AccordionTrigger className="text-pharma-700 hover:text-pharma-900">
            <div className="flex items-center">
              <FileJson className="w-5 h-5 mr-2 text-pharma-600" />
              Response Example
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <pre className="bg-gradient-to-r from-pharma-50 to-white p-4 rounded-lg overflow-x-auto border border-pharma-200">
              <code className="text-pharma-800 font-mono text-sm">{responseExample}</code>
            </pre>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pharma-700 to-pharma-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 Pharmacy API. All rights reserved.</p>
        <p className="mt-2 text-pharma-200">Empowering healthcare through technology</p>
      </div>
    </footer>
  )
}

