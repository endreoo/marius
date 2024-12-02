import React, { useState } from 'react';
import { X, MapPin, Clock } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeFromCart, updateQuantity } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryNote, setDeliveryNote] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 200;
  const total = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a payment provider
    alert('Thank you for your order! We will contact you shortly.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Your Order</h2>
            <button onClick={onClose} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600">KSh {item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                          className="border rounded p-1"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 p-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Delivery Address
                    </label>
                    <div className="mt-1 relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="pl-10 block w-full border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter your delivery address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Delivery Note (Optional)
                    </label>
                    <textarea
                      value={deliveryNote}
                      onChange={(e) => setDeliveryNote(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      placeholder="Any special instructions for delivery?"
                      rows={2}
                    />
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>KSh {subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>KSh {deliveryFee}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>KSh {total}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Place Order
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="p-4 bg-gray-50 border-t">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>Estimated delivery time: 30-45 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}