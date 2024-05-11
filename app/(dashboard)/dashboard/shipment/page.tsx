import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/shipment-tables/client";
import clientPromise from "@/lib/db";
import { Shipment } from "@/constants/data";

const breadcrumbItems = [{ title: "Shipment", link: "/dashboard/shipment" }];

const getShipments = async () => {
  const client = await clientPromise;
  const db = client.db();
  const data = await db.collection("shipments").find({}).toArray();
  return JSON.parse(JSON.stringify(data));
};

export default async function Page() {
  const shipments: Shipment[] = await getShipments();
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={shipments} />
      </div>
    </>
  );
}
