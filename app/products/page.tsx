import { db } from "@/lib/prisma";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import { columns } from "./_components/table-columns";

const ProductsPage = async () => {
  const products = await db.product.findMany();
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-6">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-sx font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <Button>
          <Plus size={20} />
          Novo Produto
        </Button>
      </div>
      <DataTable columns={columns} data={products} />
    </div>
  );
};

export default ProductsPage;
