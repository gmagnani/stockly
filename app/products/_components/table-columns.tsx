"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Product } from "@/generated/prisma/browser";
import { ColumnDef } from "@tanstack/react-table";
import { ClipboardCopyIcon, EditIcon, MoreHorizontal, TrashIcon } from "lucide-react";

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
  },{
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator /> 
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              <ClipboardCopyIcon size={16} />
              Copiar ID
            </DropdownMenuItem>
            <DropdownMenuItem>
              <EditIcon size={16} />
              Editar
              </DropdownMenuItem>
            <DropdownMenuItem>
              <TrashIcon size={16} />
              Excluir
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  }
];
