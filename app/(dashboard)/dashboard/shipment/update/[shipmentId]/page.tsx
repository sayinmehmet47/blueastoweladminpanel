import BreadCrumb from "@/components/breadcrumb";
import { ProductForm } from "@/components/forms/product-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";

import React from "react";

const getShipmentById = async (id: string) => {
  const client = await clientPromise;
  const db = client.db();
  const data = await db
    .collection("shipments")
    .findOne({ _id: new ObjectId(id) });
  return JSON.parse(JSON.stringify(data));
};

export default async function Page({
  params,
}: {
  params: { shipmentId: string };
}) {
  const breadcrumbItems = [
    { title: "Shipment", link: "/dashboard/shipment" },
    { title: "Create", link: "/dashboard/shipment/update" },
  ];

  const initialData = await getShipmentById(params.shipmentId);

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb items={breadcrumbItems} />
        <ProductForm
          categories={[{ _id: "towel", name: "towel" }]}
          initialData={initialData}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
