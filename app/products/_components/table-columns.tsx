"use client";

import { Badge } from "@/components/ui/badge";
import { Product } from "@/generated/prisma/browser";
import { ColumnDef } from "@tanstack/react-table";

const getStatus = (status: string) => {
  if (status === "IN_STOCK") return "Em Estoque";
  else return "Fora de Estoque";
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
  },
  {
    accessorKey: "stock",
    header: "Quantidade em estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const product = row.original;
      return <Badge variant={product.status === "IN_STOCK" ? "default" : "destructive"}>{getStatus(product.status)}</Badge>;
    },
  },
];
