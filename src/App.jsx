import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustShield from './components/TrustShield';
import CostCalculator from './components/CostCalculator';
import LeadCaptureForm from './components/LeadCaptureForm';
import ServicesGrid from './components/ServicesGrid';
import CraftsmanshipGallery from './components/CraftsmanshipGallery';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CallModal from './components/CallModal';
import MobileStickyCTA from './components/MobileStickyCTA';

export default function App() {
  const [selectedIssue, setSelectedIssue] = useState('furnace');
  const [voucherData, setVoucherData] = useState(null);
  const [callModalOpen, setCallModalOpen] = useState(false);

  const handleSelectIssue = (issueId) => {
    setSelectedIssue(issueId);
  };

  const handleApplyVoucher = (voucher) => {
    setVoucherData(voucher);
    if (voucher.serviceId) {
      setSelectedIssue(voucher.serviceId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-forest-600 selection:text-white">
      {/* 1. Slim Trust Header */}
      <Header 
        onOpenCallModal={() => setCallModalOpen(true)} 
      />

      {/* Main Conversion Flow */}
      <main className="flex-1">
        {/* 2. 3-Second High-Conversion Hero */}
        <Hero 
          onSelectIssue={handleSelectIssue}
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        {/* 3. 4-Pillar Engineering Trust Shield */}
        <TrustShield />

        {/* 4. Reciprocity Sequence: Value-First Pricing & Energy Calculator */}
        <CostCalculator 
          selectedIssue={selectedIssue}
          onSelectIssue={handleSelectIssue}
          onApplyVoucher={handleApplyVoucher}
        />

        {/* 5. Synchronized Lead Capture Form with $50 Instant Voucher */}
        <LeadCaptureForm 
          selectedIssue={selectedIssue}
          voucherData={voucherData}
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        {/* 6. Hick's Law Core Services Grid (4 Top + Expandable Catalogue) */}
        <ServicesGrid 
          onSelectService={handleSelectIssue}
        />

        {/* 7. Authentic Craftsmanship & Heritage Photo Gallery */}
        <CraftsmanshipGallery 
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        {/* 8. Founder Story & Engineering Philosophy */}
        <AboutUs 
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        {/* 9. Verified Appleton Homeowner Testimonials */}
        <Testimonials />

        {/* 10. Interactive Fox Cities Service Area Matrix */}
        <ServiceAreas 
          onSelectLocation={(loc) => setSelectedIssue('furnace')}
        />

        {/* 11. Engineering FAQ (Filters, Boilers, Pool Dehumidifiers) */}
        <FAQ />
      </main>

      {/* 12. Full NAP & Directory Footer */}
      <Footer 
        onOpenCallModal={() => setCallModalOpen(true)}
      />

      {/* 13. Desktop Call Modal */}
      <CallModal 
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />

      {/* 14. Mobile Sticky Bottom Lifeline CTA */}
      <MobileStickyCTA />
    </div>
  );
}
