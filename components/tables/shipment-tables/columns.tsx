"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Shipment } from "@/constants/data"; // Update this to your actual Shipment type
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Shipment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "description",
    header: "DESCRIPTION",
  },
  {
    accessorKey: "price",
    header: "PRICE",
  },
  {
    accessorKey: "category",
    header: "CATEGORY",
  },
  {
    accessorKey: "trackingId",
    header: "TRACKING ID",
  },
  {
    accessorKey: "currentLocation",
    header: "CURRENT LOCATION",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
  {
    accessorKey: "origin",
    header: "ORIGIN",
  },
  {
    accessorKey: "destination",
    header: "DESTINATION",
  },
  {
    accessorKey: "productQuantity",
    header: "PRODUCT QUANTITY",
  },
  {
    accessorKey: "productWeight",
    header: "PRODUCT WEIGHT",
  },
  {
    accessorKey: "estimatedDeliveryDate",
    header: "DELIVERY DATE",
    cell: ({ row }) => {
      const date = new Date(row.original.estimatedDeliveryDate);
      return date.toLocaleDateString("en-GB");
    },
  },
  {
    accessorKey: "shippedDate",
    header: "SHIPPED DATE",
    cell: ({ row }) => {
      const date = new Date(row.original.shippedDate);
      return date.toLocaleDateString("en-GB");
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
