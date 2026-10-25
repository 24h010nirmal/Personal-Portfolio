import React, { useState, useMemo } from 'react';

// Sample real data for Notes Vault interactive academic library
const VAULT_ITEMS = [
  { id: 1, title: 'Data Structures & Algorithms Comprehensive Notes', subject: 'Data Structures', code: 'BCA-201', sem: 2, type: 'Notes', size: '2.4 MB' },
  { id: 2, title: 'Object-Oriented Programming with Java — Question Bank', subject: 'Java Programming', code: 'BCA-302', sem: 3, type: 'Question Papers', size: '1.8 MB' },
  { id: 3, title: 'Database Management Systems & SQL Lab Manual', subject: 'DBMS', code: 'BCA-303', sem: 3, type: 'Lab Manual', size: '3.1 MB' },
  { id: 4, title: 'Python Application Programming & Django Basics', subject: 'Python', code: 'BCA-401', sem: 4, type: 'Notes', size: '4.2 MB' },
  { id: 5, title: 'Web Technology & Modern JavaScript Architecture', subject: 'Web Tech', code: 'BCA-402', sem: 4, type: 'Notes', size: '2.9 MB' },
  { id: 6, title: 'Computer Networks & Protocols Semester Exam Paper', subject: 'Networking', code: 'BCA-501', sem: 5, type: 'Question Papers', size: '1.2 MB' },
];

// Sample products for NovaCart interactive shopping discovery
const NOVACART_PRODUCTS = [
  { id: 'nc-1', name: 'Minimalist Mechanical Keyboard', category: 'Hardware', price: 85, inStock: true },
  { id: 'nc-2', name: 'Matte Ceramic Desk Mug', category: 'Lifestyle', price: 24, inStock: true },
  { id: 'nc-3', name: 'Refined Canvas Backpack', category: 'Travel', price: 95, inStock: true },
  { id: 'nc-4', name: 'Precision Desk Lamp', category: 'Hardware', price: 65, inStock: true },
];

export default function ProjectConsole() {
  const [activeTab, setActiveTab] = useState('notes-vault');

  // Notes Vault state
  const [selectedSem, setSelectedSem] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [vaultSearch, setVaultSearch] = useState('');

  // NovaCart state
  const [cart, setCart] = useState([
    { id: 'nc-1', name: 'Minimalist Mechanical Keyboard', price: 85, qty: 1 }
  ]);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponFeedback, setCouponFeedback] = useState('');

  // Cinematic 2D interactive layer state
  const [storyScrub, setStoryScrub] = useState(50);

  // Filtered Notes Vault items
  const filteredVault = useMemo(() => {
    return VAULT_ITEMS.filter((item) => {
      const matchSem = selectedSem === 'All' || item.sem === Number(selectedSem);
      const matchType = selectedType === 'All' || item.type === selectedType;
      const matchSearch = vaultSearch === '' || 
        item.title.toLowerCase().includes(vaultSearch.toLowerCase()) ||
        item.subject.toLowerCase().includes(vaultSearch.toLowerCase()) ||
        item.code.toLowerCase().includes(vaultSearch.toLowerCase());
      return matchSem && matchType && matchSearch;
    });
  }, [selectedSem, selectedType, vaultSearch]);

  // NovaCart calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountAmount = Math.round((cartSubtotal * discountPercent) / 100);
  const cartTotal = Math.max(0, cartSubtotal - discountAmount);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const applyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'STUDENT10') {
      setDiscountPercent(10);
      setCouponFeedback('10% Student discount applied');
    } else if (couponCode.trim().toUpperCase() === 'NIRMAL') {
      setDiscountPercent(20);
      setCouponFeedback('20% Developer special discount applied');
    } else {
      setCouponFeedback('Invalid code. Try "STUDENT10" or "NIRMAL"');
    }
  };

  return (
    <div className="bg-[#1C1C1C] p-6 sm:p-10 my-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6">
        <div>
          <h3 className="text-xl font-semibold font-display text-[var(--ink)]">
            Interactive Project Console
          </h3>
          <p className="text-sm text-[var(--ink)] mt-1">
            Test the live logic, state management, and interaction models of G. Nirmal's work.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Interactive projects">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'notes-vault'}
            onClick={() => setActiveTab('notes-vault')}
            className={`py-2 px-4 text-sm font-semibold tracking-normal transition-colors duration-150 ${
              activeTab === 'notes-vault'
                ? 'bg-[var(--accent)] text-[var(--accent-ink)]'
                : 'bg-[var(--bg)] text-[var(--ink)] hover:bg-[var(--surface-alt)]'
            }`}
          >
            Notes Vault Explorer
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'novacart'}
            onClick={() => setActiveTab('novacart')}
            className={`py-2 px-4 text-sm font-semibold tracking-normal transition-colors duration-150 ${
              activeTab === 'novacart'
                ? 'bg-[var(--accent)] text-[var(--accent-ink)]'
                : 'bg-[var(--bg)] text-[var(--ink)] hover:bg-[var(--surface-alt)]'
            }`}
          >
            NovaCart Cart Engine
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'cinematic'}
            onClick={() => setActiveTab('cinematic')}
            className={`py-2 px-4 text-sm font-semibold tracking-normal transition-colors duration-150 ${
              activeTab === 'cinematic'
                ? 'bg-[var(--accent)] text-[var(--accent-ink)]'
                : 'bg-[var(--bg)] text-[var(--ink)] hover:bg-[var(--surface-alt)]'
            }`}
          >
            2D Narrative Staging
          </button>
        </div>
      </div>

      {/* Mode 1: Notes Vault Academic Library Explorer */}
      {activeTab === 'notes-vault' && (
        <div className="pt-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="vault-search" className="sr-only">Search academic resources</label>
              <input
                id="vault-search"
                type="text"
                value={vaultSearch}
                onChange={(e) => setVaultSearch(e.target.value)}
                placeholder="Search subject, course code, or material title..."
                className="editorial-input text-sm py-2"
              />
            </div>
            <div className="flex gap-2">
              <select
                aria-label="Filter by semester"
                value={selectedSem}
                onChange={(e) => setSelectedSem(e.target.value)}
                className="editorial-input text-sm py-2 w-auto font-medium"
              >
                <option value="All">All Semesters</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
              </select>
              <select
                aria-label="Filter by document type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="editorial-input text-sm py-2 w-auto font-medium"
              >
                <option value="All">All Document Types</option>
                <option value="Notes">Lecture Notes</option>
                <option value="Question Papers">Question Papers</option>
                <option value="Lab Manual">Lab Manual</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {filteredVault.length === 0 ? (
              <div className="p-8 text-center bg-[var(--bg)]">
                <p className="text-sm text-[var(--ink)] font-medium">No resources matched your search filter.</p>
              </div>
            ) : (
              filteredVault.map((item) => (
                <div
                  key={item.id}
                  className="bg-[var(--bg)] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-150 hover:bg-[var(--surface-alt)]"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm px-2.5 py-0.5 bg-[var(--surface-alt)] text-[var(--ink)] font-semibold">
                        {item.code}
                      </span>
                      <span className="text-sm text-[var(--ink)] font-medium">
                        Semester {item.sem} · {item.type}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-[var(--ink)]">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm tabular-figures text-[var(--ink)] font-medium">
                      {item.size}
                    </span>
                    <button
                      type="button"
                      onClick={() => alert(`Simulated download for: ${item.title}`)}
                      className="editorial-btn text-sm py-2 px-4 min-h-[2.4rem]"
                    >
                      Preview File
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <p className="text-sm text-[var(--ink)] mt-4">
            Simulating Notes Vault's Django + React database taxonomy query system.
          </p>
        </div>
      )}

      {/* Mode 2: NovaCart Stateful E-Commerce Cart Engine */}
      {activeTab === 'novacart' && (
        <div className="pt-6">
          <div className="editorial-grid gap-6">
            {/* Product selection column */}
            <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
              <p className="text-base font-semibold text-[var(--ink)] mb-2">
                Available Products (NovaCart Catalog)
              </p>
              {NOVACART_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[var(--bg)] p-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-base font-semibold text-[var(--ink)]">{prod.name}</p>
                    <p className="text-sm text-[var(--ink)]">{prod.category} · In Stock</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-semibold text-[var(--ink)] tabular-figures">
                      ${prod.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => addToCart(prod)}
                      className="editorial-btn text-sm py-2 px-4 min-h-[2.4rem]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart & Calculation Column */}
            <div className="col-span-12 md:col-span-5 bg-[var(--bg)] p-6 flex flex-col justify-between">
              <div>
                <p className="text-base font-semibold text-[var(--ink)] mb-4">
                  Live Order Summary
                </p>
                {cart.length === 0 ? (
                  <p className="text-sm text-[var(--ink)] py-4">Your cart is currently empty.</p>
                ) : (
                  <div className="flex flex-col gap-3 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-sm">
                        <span className="text-[var(--ink)] font-semibold">
                          {item.name} × {item.qty}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="tabular-figures font-medium">${item.price * item.qty}</span>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-[var(--ink)] hover:text-red-700 ml-2 font-bold"
                            aria-label={`Remove ${item.name}`}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Coupon input */}
                <form onSubmit={applyCoupon} className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Coupon code"
                    className="editorial-input text-sm py-2 flex-1"
                  />
                  <button type="submit" className="editorial-btn text-sm py-2 px-4 min-h-[2.4rem]">
                    Apply
                  </button>
                </form>
                {couponFeedback && (
                  <p className="text-sm text-[var(--accent)] font-semibold mb-4">{couponFeedback}</p>
                )}

                <div className="space-y-2 pt-4 bg-[var(--surface)] p-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--ink)]">Subtotal</span>
                    <span className="tabular-figures font-medium">${cartSubtotal}</span>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-[var(--accent)] font-semibold">
                      <span>Discount ({discountPercent}%)</span>
                      <span className="tabular-figures">-${discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-semibold text-[var(--ink)] pt-2">
                    <span>Estimated Total</span>
                    <span className="tabular-figures">${cartTotal}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <button
                  type="button"
                  onClick={() => alert(`Simulated checkout for $${cartTotal}. Total verified.`)}
                  disabled={cart.length === 0}
                  className="editorial-btn w-full text-sm text-center disabled:opacity-50 min-h-[2.8rem]"
                >
                  Simulate Checkout
                </button>
              </div>
            </div>
          </div>
          <p className="text-sm text-[var(--ink)] mt-4">
            NovaCart interactive reactive state demonstrator using pure React hooks and mathematical total aggregation.
          </p>
        </div>
      )}

      {/* Mode 3: 2D Narrative Staging Controller */}
      {activeTab === 'cinematic' && (
        <div className="pt-6">
          <div className="mb-6">
            <label htmlFor="timeline-scrubber" className="block text-base font-semibold text-[var(--ink)] mb-2">
              Scrub Narrative 2D Stage: {storyScrub}%
            </label>
            <input
              id="timeline-scrubber"
              type="range"
              min="0"
              max="100"
              value={storyScrub}
              onChange={(e) => setStoryScrub(Number(e.target.value))}
              className="w-full h-3 bg-[var(--surface-alt)] cursor-pointer accent-[var(--accent)]"
            />
          </div>

          <div className="bg-[var(--bg)] p-8 overflow-hidden relative min-h-[240px] flex items-center justify-center">
            {/* Layer 1: Background Title with 2D translate */}
            <div 
              className="absolute inset-0 flex items-center justify-center select-none pointer-events-none transition-transform duration-75"
              style={{
                transform: `translateX(${(storyScrub - 50) * 1.5}px)`,
                opacity: 0.15 + (storyScrub / 120),
              }}
            >
              <span className="font-display text-5xl md:text-7xl font-bold tracking-tight text-[var(--ink)]">
                CINEMATIC
              </span>
            </div>

            {/* Layer 2: Core Frame */}
            <div 
              className="relative z-10 p-6 bg-[var(--surface)] max-w-md text-center transition-[transform,opacity] duration-150"
              style={{
                transform: `translateY(${(50 - storyScrub) * 0.4}px)`,
              }}
            >
              <p className="text-sm font-semibold text-[var(--accent)] mb-1">
                2D Motion Composition
              </p>
              <h4 className="text-lg font-semibold font-display text-[var(--ink)] mb-2">
                Restrained Storytelling
              </h4>
              <p className="text-sm text-[var(--ink)] leading-relaxed">
                Demonstrating that dramatic impact comes from typography scale, precise spacing, and scroll coordination—without any 3D libraries.
              </p>
            </div>
          </div>
          <p className="text-sm text-[var(--ink)] mt-4">
            Interactive demonstration of Nirmal's 2D scroll staging system.
          </p>
        </div>
      )}
    </div>
  );
}
