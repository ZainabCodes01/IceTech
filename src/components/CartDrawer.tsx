import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, Check, Snowflake } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );
  const freeThreshold = 25.0;
  const isFreeDelivery = subtotal >= freeThreshold;
  const packagingFee = items.length > 0 && !isFreeDelivery ? 3.50 : 0.0;
  const tax = subtotal * 0.08;
  const total = subtotal + packagingFee + tax;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderConfirmed(true);
      setTimeout(() => {
        onClearCart();
      }, 400);
    }, 1200);
  };

  const handleClose = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header with decorative melting rim */}
          <div className="bg-gradient-to-r from-[#33A5D9] to-[#1074B2] text-white p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <h3 className="font-display font-extrabold text-xl text-white">
                  Your Treat Bag
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/20 text-white font-bold">
                  {items.reduce((acc, i) => acc + i.quantity, 0)} items
                </span>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-xl hover:bg-white/20 transition-colors cursor-pointer text-white"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {orderConfirmed ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-display font-black text-2xl text-[#0B5F96]">
                  Order Confirmed!
                </h4>
                <p className="text-xs font-mono text-slate-500 mt-1">
                  ORDER #IT-{Math.floor(1000 + Math.random() * 9000)}
                </p>
                <div className="mt-6 p-4 rounded-2xl bg-[#EAF7FD] border border-[#D5F0FC] text-left text-xs text-slate-700 space-y-2">
                  <div className="flex items-center gap-2 text-[#1074B2] font-bold">
                    <Snowflake className="w-4 h-4" />
                    <span>Packed in Dry-Ice Thermal Pods</span>
                  </div>
                  <p>
                    Your artisanal ice cream is being packed at -18°C. Our courier is dispatched for fresh arrival before the melt begins!
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-8 px-6 py-2.5 bg-[#1074B2] text-white font-display font-bold text-sm rounded-xl hover:bg-[#0B5F96] transition-colors cursor-pointer shadow-md"
                >
                  Continue Browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center text-slate-400">
                <ShoppingBag className="w-12 h-12 mx-auto stroke-1 text-slate-300 mb-3" />
                <p className="font-display font-bold text-lg text-slate-600">
                  Your treat bag is empty
                </p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Explore our signature menu or craft your own scoop to experience the ICE TECH melt!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Free Cold Delivery Bar */}
                <div className="p-3 bg-[#EAF7FD] rounded-2xl border border-[#D5F0FC] text-xs">
                  {isFreeDelivery ? (
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>You qualify for FREE Cryo-Insulated Delivery!</span>
                    </div>
                  ) : (
                    <div className="text-slate-600">
                      Add <strong className="text-[#1074B2]">${(freeThreshold - subtotal).toFixed(2)}</strong> more for free insulated delivery!
                      <div className="w-full bg-white h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-[#1074B2] h-full rounded-full transition-all"
                          style={{ width: `${Math.min(100, (subtotal / freeThreshold) * 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Items List */}
                {items.map((item) => (
                  <div
                    key={`${item.menuItem.id}-${item.cupOrCone || ''}`}
                    className="p-4 rounded-2xl border border-slate-200/80 bg-[#F8FCFF] flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex-1">
                      <h5 className="font-display font-bold text-sm text-[#0B5F96] leading-snug">
                        {item.menuItem.name}
                      </h5>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {item.cupOrCone || 'Artisan Waffle Cone'}
                      </div>
                      <div className="text-xs font-mono font-bold text-[#1074B2] mt-1 tabular-nums">
                        ${(item.menuItem.price * item.quantity).toFixed(2)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-slate-300 rounded-xl bg-white shadow-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                          className="p-1.5 text-slate-500 hover:text-slate-900 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          {item.quantity === 1 ? (
                            <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                          ) : (
                            <Minus className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <span className="w-6 text-center text-xs font-mono font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                          className="p-1.5 text-slate-500 hover:text-slate-900 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {!orderConfirmed && items.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50">
              <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums text-slate-800 font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cryo-Insulated Packaging</span>
                  <span className="font-mono tabular-nums">
                    {packagingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${packagingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="font-mono tabular-nums text-slate-800">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 text-sm font-bold text-[#0B5F96]">
                  <span>Total Due</span>
                  <span className="font-display font-black text-lg text-[#0B5F96] font-mono tabular-nums">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 bg-[#1074B2] hover:bg-[#0B5F96] text-white font-display font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isCheckingOut ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Chilling Order...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Complete Cold Checkout (${total.toFixed(2)})</span>
                  </>
                )}
              </button>

              <div className="mt-3 text-[11px] text-center text-slate-400">
                Guaranteed 100% frozen on arrival · Packed in dry ice pods
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
