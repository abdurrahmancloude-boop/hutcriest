import React from 'react';
import { X, Plus, Minus, Trash2, Phone, ShoppingBag } from 'lucide-react';
import { OrderItem } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearOrder: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, orderItem) => sum + orderItem.item.numericPrice * orderItem.quantity,
    0
  );

  const orderSummaryText = items
    .map(
      (orderItem) =>
        `• ${orderItem.quantity}x ${orderItem.item.name} (${orderItem.item.price})`
    )
    .join('\n');

  const whatsappMessage = encodeURIComponent(
    `Hello Crust Hut! I would like to place an order:\n\n${orderSummaryText}\n\nEstimated Total: Rs ${totalAmount}\n\nLocation: Rawalpindi`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2D2A26]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] border-l border-[#EDE4D8] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#EDE4D8] flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#F2ECE3] text-[#C25E2E]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-[#231F1C]">Your Order</h3>
                <p className="text-xs text-[#7E7468]">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>
            <button
              id="close-order-drawer-btn"
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-[#EFE8DD] text-[#554D44] transition-colors cursor-pointer"
              aria-label="Close order panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F6F1EA] border border-[#E9E0D4] flex items-center justify-center text-[#9E9283] mb-3">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-base text-[#231F1C] mb-1">Your bag is empty</h4>
                <p className="text-xs text-[#7E7468] max-w-xs mx-auto mb-5">
                  Browse our menu and tap &quot;Add&quot; on pizzas, pastas, sandwiches or fries to assemble your order.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#C25E2E] hover:bg-[#AC5024] transition-colors cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              items.map((orderItem) => (
                <div
                  key={orderItem.item.id}
                  className="bg-[#FAF8F5] rounded-2xl p-3.5 border border-[#EDE4D8] flex items-center gap-3.5"
                >
                  <img
                    src={orderItem.item.image}
                    alt={orderItem.item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#E4DACD]"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sm text-[#231F1C] truncate">
                      {orderItem.item.name}
                    </h5>
                    <p className="text-xs font-extrabold text-[#C25E2E] mt-0.5">
                      Rs {orderItem.item.numericPrice * orderItem.quantity}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2.5 mt-2">
                      <div className="inline-flex items-center border border-[#DCD1C2] rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(orderItem.item.id, -1)}
                          className="px-2 py-1 text-[#5E554A] hover:bg-[#F3ECE1] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#231F1C]">
                          {orderItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(orderItem.item.id, 1)}
                          className="px-2 py-1 text-[#5E554A] hover:bg-[#F3ECE1] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(orderItem.item.id)}
                        className="p-1 text-[#A89C8F] hover:text-[#C25E2E] transition-colors cursor-pointer ml-auto"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with checkout actions */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#EDE4D8] bg-[#FAF7F2] space-y-3.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6C6359] font-medium">Estimated Total:</span>
                <span className="font-black text-xl text-[#231F1C]">
                  Rs {totalAmount}
                </span>
              </div>

              <div className="space-y-2">
                {/* 1-Click Direct Phone Order */}
                <a
                  id="drawer-call-order-btn"
                  href={`tel:${RESTAURANT_INFO.phoneTel}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-[#C25E2E] hover:bg-[#AC5024] transition-colors shadow-2xs text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Place Order ({RESTAURANT_INFO.phone})</span>
                </a>

                {/* WhatsApp Quick Order */}
                <a
                  id="drawer-whatsapp-order-btn"
                  href={`https://wa.me/923354231231?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-[#1E7743] bg-[#EBF5EE] hover:bg-[#DEEFE3] border border-[#C6E4D0] transition-colors text-xs"
                >
                  <span>Send Order via WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-1 text-[11px] text-[#867B6E]">
                <span>Cash on Delivery / Takeaway</span>
                <button
                  onClick={onClearOrder}
                  className="hover:text-[#C25E2E] underline cursor-pointer"
                >
                  Clear Bag
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
