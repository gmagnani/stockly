import { DataTable } from "@/components/ui/data-table";
import { columns } from "./_components/table-columns";
import { getProducts } from "@/app/_data-access/product/get-products";
import AddProduct from "../_components/add-product";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-6">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-sx font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <AddProduct />
      </div>
      <DataTable columns={columns} data={JSON.parse(JSON.stringify(products))} />
    </div>
  );
};

export default ProductsPage;
