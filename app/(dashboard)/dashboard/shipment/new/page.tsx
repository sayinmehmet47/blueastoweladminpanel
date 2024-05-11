import BreadCrumb from "@/components/breadcrumb";
import { ProductForm } from "@/components/forms/product-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "Shipment", link: "/dashboard/shipment" },
    { title: "Create", link: "/dashboard/shipment/update" },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb items={breadcrumbItems} />
        <ProductForm
          categories={[{ _id: "towel", name: "towel" }]}
          initialData={null}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
