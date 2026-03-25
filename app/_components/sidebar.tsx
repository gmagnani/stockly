const Sidebar = () => {
  return (
    <div className="w-64 bg-zinc-50">
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">Stockly</h1>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <button className="rounded-md bg-zinc-100 px-6 py-2">Dashboard</button>
        <button className="rounded-md bg-zinc-100 px-6 py-2">Produtos</button>
        <button className="rounded-md bg-zinc-100 px-6 py-2">Pedidos</button>
      </div>
    </div>
  );
};

export default Sidebar;
