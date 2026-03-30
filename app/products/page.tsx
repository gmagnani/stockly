import { DataTable } from "@/components/ui/data-table";
import { getProducts } from "@/app/_data-access/product/get-products";
import Header, { HeaderLeft, HeaderRight, HeaderSubtitle, HeaderTitle } from "../_components/header";
import CreateProductButton from "./_components/create-product-button";
import { productTableColumns } from "./_components/table-columns";
export const dynamic = "force-static";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="m-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Gestão de Produtos</HeaderSubtitle>
          <HeaderTitle>Produtos</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateProductButton />
        </HeaderRight>
      </Header>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
