import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TOrder } from "@/types";
import { Package, Search } from "lucide-react";
import DeleteOrderModal from "./DeleteOrderModal";
import EditOrderModal from "./EditOrderModal";
import OrderDetailsModal from "./OrderDetailsModal";

const statusVariant = {
  PENDING: "destructive",
  PROCESSING: "outline",
  SHIPPED: "outline",
  DELIVERED: "default",
  CANCELLED: "destructive",
};

const OrderList = ({
  orders,
  onClearFilters,
}: {
  orders: TOrder[];
  onClearFilters: () => void;
}) => {
  return (
    <div className="shadow-cardLightShadow rounded-md">
      {orders?.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 md:py-20 px-4 text-center">
          <div className="relative mb-6">
            <Package className="h-16 w-16 text-muted-foreground/50" />
            <Search className="absolute -bottom-1 -right-1 h-6 w-6 text-muted-foreground/70" />
          </div>

          <h2 className="text-2xl font-semibold text-foreground mb-2">
            No Order Found!
          </h2>

          <p className="text-muted-foreground mb-6 max-w-md">
            We couldn&apos;t find any orders matching your search. Try adjusting
            your filters or search terms.
          </p>

          <Button variant="outline" onClick={onClearFilters}>
            Clear Search
          </Button>
        </div>
      ) : (
        <Table className="w-full">
          <TableHeader className="">
            <TableRow className="bg-primary text-white text-base py-3">
              <TableHead className="py-3">No</TableHead>
              <TableHead className="py-3">Buyer Name</TableHead>
              <TableHead className="py-3">Phone</TableHead>
              <TableHead className="py-3">Price</TableHead>
              <TableHead className="py-3">Status</TableHead>
              <TableHead className="text-right py-3">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order: TOrder) => (
              <TableRow key={order._id}>
                <TableCell className="py-3">
                  <span className="text-sm font-medium">
                    {order.orderNumber}
                  </span>
                </TableCell>
                <TableCell className="py-3 font-medium max-w-[250px] truncate">
                  {order.fullName}
                </TableCell>
                <TableCell className="py-3">
                  <span className="">{order.phoneNo}</span>
                </TableCell>
                <TableCell className="py-3">৳{order.totalPrice}</TableCell>
                <TableCell className="py-3">
                  <Badge
                    variant={
                      statusVariant[order.status] as
                        | "destructive"
                        | "outline"
                        | "default"
                        | "secondary"
                    }
                    className="capitalize"
                  >
                    {order.status.toLowerCase()}
                  </Badge>
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex justify-end gap-2">
                    <OrderDetailsModal order={order} />
                    <EditOrderModal
                      orderId={order._id}
                      currentStatus={order.status}
                    />
                    <DeleteOrderModal orderId={order._id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default OrderList;
