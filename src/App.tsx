/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { OverviewSection } from './components/OverviewSection';
import { NewsSection } from './components/NewsSection';
import { QuickHubSection } from './components/QuickHubSection';

// Sub Views
import { AboutView } from './components/Views/AboutView';
import { ProductsView } from './components/Views/ProductsView';
import { ServicesView } from './components/Views/ServicesView';
import { EquipmentView } from './components/Views/EquipmentView';
import { EsgView } from './components/Views/EsgView';
import { SupportView } from './components/Views/SupportView';

// Modals
import { ProductModal } from './components/Modals/ProductModal';
import { QuoteModal } from './components/Modals/QuoteModal';
import { MsdsModal } from './components/Modals/MsdsModal';
import { NewsModal } from './components/Modals/NewsModal';
import { SearchModal } from './components/Modals/SearchModal';
import { CatalogModal, CertModal } from './components/Modals/CatalogModal';

import { GasProduct, NewsItem } from './data/gasData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isEnglish, setIsEnglish] = useState<boolean>(false);

  // Modal triggers
  const [selectedProduct, setSelectedProduct] = useState<GasProduct | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState<string>('');
  const [msdsModalOpen, setMsdsModalOpen] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState<boolean>(false);
  const [certModalOpen, setCertModalOpen] = useState<boolean>(false);

  // Scroll to top upon tab navigation
  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productName?: string) => {
    setQuoteInitialProduct(productName || '');
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-['Inter'] selection:bg-[#005fae] selection:text-white">
      {/* Global Navigation Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
        isEnglish={isEnglish}
        onToggleLang={() => setIsEnglish(!isEnglish)}
      />

      {/* Main Content Body */}
      <main className="w-full pt-20 flex-1">
        {currentTab === 'home' && (
          <div className="flex flex-col w-full animate-in fade-in duration-300">
            {/* 1. Hero Section */}
            <HeroSection
              onExploreProducts={() => {
                const el = document.getElementById('products-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else handleNavigate('products');
              }}
              onOpenQuote={() => handleOpenQuote()}
              isEnglish={isEnglish}
            />

            {/* 2. Key Figures & Metrics */}
            <MetricsSection
              onNavigateTab={handleNavigate}
            />

            {/* 3. Products & Solutions (5 Bento Columns) */}
            <ProductsSection
              onSelectProduct={(p) => setSelectedProduct(p)}
              onOpenCatalog={() => setCatalogModalOpen(true)}
            />

            {/* 4. Total Services & Infrastructure */}
            <ServicesSection
              onOpenCert={() => setCertModalOpen(true)}
              onNavigateTab={handleNavigate}
            />

            {/* 5. ESG & Corporate Overview */}
            <OverviewSection
              onOpenMsds={() => setMsdsModalOpen(true)}
              onNavigateTab={handleNavigate}
            />

            {/* 6. News & Regulatory Highlights */}
            <NewsSection
              onSelectNews={(n) => setSelectedNews(n)}
              onNavigateTab={handleNavigate}
            />

            {/* 7. Bottom Action Quick Hub & Fast Inquiry */}
            <QuickHubSection
              onNavigateTab={handleNavigate}
              onOpenQuote={handleOpenQuote}
            />
          </div>
        )}

        {currentTab === 'about' && (
          <AboutView 
            onOpenQuote={() => handleOpenQuote()}
            onOpenCert={() => setCertModalOpen(true)}
          />
        )}

        {currentTab === 'products' && (
          <ProductsView
            onSelectProduct={(p) => setSelectedProduct(p)}
            onOpenQuote={(name) => handleOpenQuote(name)}
            onOpenCatalog={() => setCatalogModalOpen(true)}
            onOpenMsds={() => setMsdsModalOpen(true)}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            onOpenQuote={() => handleOpenQuote()}
            onOpenCert={() => setCertModalOpen(true)}
          />
        )}

        {currentTab === 'equipment' && (
          <EquipmentView
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentTab === 'esg' && (
          <EsgView
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentTab === 'support' && (
          <SupportView
            onOpenQuote={() => handleOpenQuote()}
            onOpenMsds={() => setMsdsModalOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigateTab={handleNavigate}
        onOpenMsds={() => setMsdsModalOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating Quick Consultation FAB for seamless access */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        <button
          onClick={() => handleOpenQuote()}
          className="px-4 py-3 rounded-full bg-[#005fae] hover:bg-[#004785] text-white shadow-xl hover:shadow-2xl flex items-center gap-2 transition-all hover:scale-105 border border-white/20 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">support_agent</span>
          <span className="text-xs font-bold hidden sm:inline">실시간 견적 문의</span>
        </button>
      </div>

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForQuote={(name) => handleOpenQuote(name)}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={quoteInitialProduct}
      />

      <MsdsModal
        isOpen={msdsModalOpen}
        onClose={() => setMsdsModalOpen(false)}
      />

      <NewsModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectNews={(n) => setSelectedNews(n)}
        onNavigateTab={handleNavigate}
      />

      <CatalogModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
      />

      <CertModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
      />
    </div>
  );
}
