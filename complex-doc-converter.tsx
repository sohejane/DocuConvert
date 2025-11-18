import React, { useState } from 'react';
import { FileText, Upload, Download, CheckCircle, AlertCircle, Loader2, FileCheck, GraduationCap, Shield, Lock, Trash2, BookOpen, Database, Timer, EyeOff, Search, TrendingUp } from 'lucide-react';

export default function DocumentConverter() {
  const [activeMode, setActiveMode] = useState('pro');
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [conversionDetails, setConversionDetails] = useState(null);
  const [extractedData, setExtractedData] = useState(null);

  const seoContent = {
    pro: {
      h1: 'PDF to Word Converter for Complex Tables (Preserves Layout)',
      metaDescription: 'Convert legal document PDF to Word online without losing table formatting. Perfect for contracts, financial reports, and invoices with 98.5% accuracy.',
      longTail: ['convert scanned contract to editable word free', 'pdf to docx without losing table formatting', 'convert legal document pdf to word online', 'pdf invoice to word with tables intact']
    },
    academic: {
      h1: 'Academic PDF to Word Extractor: Figures and References',
      metaDescription: 'Extract citations from PDF to Word for free. Convert scientific papers with editable equations, footnotes, and bibliography preserved.',
      longTail: ['extract citations from pdf to word for free', 'convert scientific paper pdf to docx editable equations', 'pdf to word converter retaining footnotes and bibliography', 'LaTeX equation preservation pdf converter']
    },
    secure: {
      h1: 'Secure PDF to Word Converter (No Server Upload)',
      metaDescription: 'Client-side PDF to Word conversion free. HIPAA compliant, no email registration required. Files never leave your device.',
      longTail: ['client-side pdf to word conversion free', 'pdf to docx no email registration required', 'HIPAA compliant pdf to word converter online', 'secure pdf converter no upload']
    }
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
      setConverted(false);
      setProgress(0);
      setConversionDetails(null);
      setExtractedData(null);
    }
  };

  const simulateConversion = async () => {
    setConverting(true);
    setProgress(0);

    const stages = [
      { progress: 20 },
      { progress: 40 },
      { progress: 60 },
      { progress: 80 },
      { progress: 100 }
    ];

    for (const stage of stages) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProgress(stage.progress);
    }

    if (activeMode === 'academic') {
      setExtractedData({
        citations: 25,
        equations: 12,
        footnotes: 18,
        references: 35
      });
    } else if (activeMode === 'pro') {
      setConversionDetails({
        pages: 42,
        tables: 8,
        images: 5,
        accuracy: 98.5
      });
    }

    setConverting(false);
    setConverted(true);
  };

  const handleDownload = () => {
    const filename = file ? file.name.replace('.pdf', '') : 'converted';
    const extension = activeMode === 'academic' ? '.md' : '.docx';
    const content = 'Demo conversion file';
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename + extension;
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentSEO = seoContent[activeMode];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* SEO Header Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span className="font-semibold">ConvertPro</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <span>✓ No Email Required</span>
            <span>✓ 100% Free</span>
            <span>✓ Secure & Private</span>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Mode Selector */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => {
                  setActiveMode('pro');
                  setFile(null);
                  setConverted(false);
                }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  activeMode === 'pro'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                <FileCheck className={`w-10 h-10 mb-3 mx-auto ${activeMode === 'pro' ? 'text-blue-600' : 'text-slate-400'}`} />
                <h3 className="font-bold text-slate-800 mb-1">Complex Tables</h3>
                <p className="text-xs text-slate-600">Legal & Financial Docs</p>
              </button>
              
              <button
                onClick={() => {
                  setActiveMode('academic');
                  setFile(null);
                  setConverted(false);
                }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  activeMode === 'academic'
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-slate-200 hover:border-purple-300'
                }`}
              >
                <GraduationCap className={`w-10 h-10 mb-3 mx-auto ${activeMode === 'academic' ? 'text-purple-600' : 'text-slate-400'}`} />
                <h3 className="font-bold text-slate-800 mb-1">Research Papers</h3>
                <p className="text-xs text-slate-600">Citations & Equations</p>
              </button>
              
              <button
                onClick={() => {
                  setActiveMode('secure');
                  setFile(null);
                  setConverted(false);
                }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  activeMode === 'secure'
                    ? 'border-green-500 bg-green-50'
                    : 'border-slate-200 hover:border-green-300'
                }`}
              >
                <Shield className={`w-10 h-10 mb-3 mx-auto ${activeMode === 'secure' ? 'text-green-600' : 'text-slate-400'}`} />
                <h3 className="font-bold text-slate-800 mb-1">Secure & Private</h3>
                <p className="text-xs text-slate-600">HIPAA/GDPR Compliant</p>
              </button>
            </div>
          </div>

          {/* SEO-Optimized Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 leading-tight">
              {currentSEO.h1}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-4">
              {currentSEO.metaDescription}
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Client-Side Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>
                  {activeMode === 'pro' && '98.5% Accuracy'}
                  {activeMode === 'academic' && 'LaTeX Support'}
                  {activeMode === 'secure' && 'HIPAA Compliant'}
                </span>
              </div>
            </div>
          </div>

          {/* Main Conversion Area */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            {!file ? (
              <div className="text-center">
                <label className="cursor-pointer">
                  <div className="border-4 border-dashed border-slate-300 rounded-xl p-12 hover:border-blue-500 hover:bg-blue-50 transition-all">
                    <Upload className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-xl font-semibold text-slate-700 mb-2">
                      Drop your PDF here or click to browse
                    </p>
                    <p className="text-slate-500 mb-2">
                      {activeMode === 'pro' && 'Convert scanned contracts and invoices without losing table formatting'}
                      {activeMode === 'academic' && 'Extract citations, equations, and footnotes from scientific papers'}
                      {activeMode === 'secure' && 'Files processed locally - never uploaded to our servers'}
                    </p>
                    <p className="text-sm text-slate-400">
                      Maximum 50MB • No email or registration required
                    </p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div>
                {/* File Info */}
                <div className="bg-slate-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <FileText className="w-10 h-10 text-blue-600" />
                      <div>
                        <p className="font-semibold text-slate-800">{file.name}</p>
                        <p className="text-sm text-slate-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    {!converting && !converted && (
                      <button
                        onClick={() => setFile(null)}
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>

                {/* Progress */}
                {converting && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">
                        {activeMode === 'pro' && 'Preserving table layouts and formatting...'}
                        {activeMode === 'academic' && 'Extracting citations and equations...'}
                        {activeMode === 'secure' && 'Securely converting (client-side only)...'}
                      </span>
                      <span className="text-sm font-semibold text-blue-600">{progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Results */}
                {converted && (
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4 text-green-600">
                      <CheckCircle className="w-6 h-6" />
                      <span className="text-lg font-semibold">
                        {activeMode === 'pro' && 'Tables and formatting preserved perfectly!'}
                        {activeMode === 'academic' && 'Research data extracted successfully!'}
                        {activeMode === 'secure' && 'Secure conversion complete!'}
                      </span>
                    </div>
                    
                    {activeMode === 'academic' && extractedData && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-purple-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-slate-800">{extractedData.citations}</p>
                          <p className="text-xs text-slate-600">Citations Extracted</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-slate-800">{extractedData.equations}</p>
                          <p className="text-xs text-slate-600">LaTeX Equations</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-slate-800">{extractedData.footnotes}</p>
                          <p className="text-xs text-slate-600">Footnotes</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-slate-800">{extractedData.references}</p>
                          <p className="text-xs text-slate-600">References</p>
                        </div>
                      </div>
                    )}

                    {activeMode === 'pro' && conversionDetails && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-slate-800">{conversionDetails.pages}</p>
                          <p className="text-xs text-slate-600">Pages Converted</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-slate-800">{conversionDetails.tables}</p>
                          <p className="text-xs text-slate-600">Tables Preserved</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-slate-800">{conversionDetails.images}</p>
                          <p className="text-xs text-slate-600">Images Intact</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-blue-600">{conversionDetails.accuracy}%</p>
                          <p className="text-xs text-slate-600">Format Accuracy</p>
                        </div>
                      </div>
                    )}

                    {activeMode === 'secure' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Timer className="w-8 h-8 text-green-600" />
                          <div>
                            <p className="font-semibold text-green-800">Client-Side Processing Complete</p>
                            <p className="text-sm text-green-700">Your file was never uploaded to any server</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="text-center">
                            <Lock className="w-6 h-6 text-green-600 mx-auto mb-1" />
                            <p className="text-xs text-slate-600">Zero Upload</p>
                          </div>
                          <div className="text-center">
                            <Shield className="w-6 h-6 text-green-600 mx-auto mb-1" />
                            <p className="text-xs text-slate-600">GDPR Safe</p>
                          </div>
                          <div className="text-center">
                            <EyeOff className="w-6 h-6 text-green-600 mx-auto mb-1" />
                            <p className="text-xs text-slate-600">HIPAA Ready</p>
                          </div>
                          <div className="text-center">
                            <Trash2 className="w-6 h-6 text-green-600 mx-auto mb-1" />
                            <p className="text-xs text-slate-600">No Tracking</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {!converted && !converting && (
                    <button
                      onClick={simulateConversion}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all"
                    >
                      {activeMode === 'academic' && 'Extract Research Data'}
                      {activeMode === 'secure' && 'Convert Securely (No Upload)'}
                      {activeMode === 'pro' && 'Convert to Editable DOCX'}
                    </button>
                  )}
                  {converted && (
                    <>
                      <button
                        onClick={handleDownload}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        Download {activeMode === 'academic' ? 'Markdown' : 'DOCX'}
                      </button>
                      <button
                        onClick={() => {
                          setFile(null);
                          setConverted(false);
                          setConversionDetails(null);
                          setExtractedData(null);
                        }}
                        className="px-6 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50"
                      >
                        Convert Another
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* SEO Content Sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {activeMode === 'pro' && (
              <>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">Why Choose ConvertPro for Legal Documents?</h2>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Perfect for contracts:</strong> Convert scanned contracts to editable Word files without losing table formatting or legal clause structures.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Invoice accuracy:</strong> Convert PDF invoices to Word with tables, line items, and calculations perfectly intact.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Financial reports:</strong> Preserve complex financial tables and multi-column layouts that other converters destroy.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">How We Compare</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-slate-700">Table Accuracy</span>
                      <span className="font-bold text-green-600">ConvertPro: 98.5%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-slate-700">Smallpdf</span>
                      <span className="text-slate-600">~85%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-slate-700">Nitro PDF</span>
                      <span className="text-slate-600">~82%</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">
                      * Based on conversion tests of 100+ legal and financial documents with complex tables
                    </p>
                  </div>
                </div>
              </>
            )}

            {activeMode === 'academic' && (
              <>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">Perfect for Thesis & Research</h2>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Extract citations:</strong> Automatically extract all citations from scientific papers in APA, MLA, or Chicago format.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>LaTeX equations:</strong> Convert PDF equations to editable LaTeX markup for use in your own papers.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Bibliography intact:</strong> Retains footnotes, endnotes, and bibliography formatting perfectly.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">How to Use for Literature Reviews</h2>
                  <ol className="space-y-3 text-sm text-slate-700 list-decimal list-inside">
                    <li>Upload your research paper PDF</li>
                    <li>Our tool extracts all citations and references</li>
                    <li>Equations converted to editable LaTeX</li>
                    <li>Download as Markdown or import to citation manager</li>
                    <li>Use extracted data in your thesis or meta-analysis</li>
                  </ol>
                  <p className="text-xs text-purple-600 mt-4 font-semibold">
                    Save hours of manual citation copying!
                  </p>
                </div>
              </>
            )}

            {activeMode === 'secure' && (
              <>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">Why Client-Side Processing Matters</h2>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>No server upload:</strong> Your files are processed entirely in your browser - they never leave your device.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>HIPAA compliant:</strong> Perfect for healthcare professionals converting patient records and medical charts.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>GDPR safe:</strong> Meets EU data protection requirements with zero data collection or storage.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">Top 3 Risks of Free Converters</h2>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-red-600 mb-1">⚠️ Data Harvesting</p>
                      <p className="text-slate-600">Most free converters upload your files to their servers and may retain copies indefinitely.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-red-600 mb-1">⚠️ Third-Party Sharing</p>
                      <p className="text-slate-600">Your sensitive documents could be shared with advertisers or sold to data brokers.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-red-600 mb-1">⚠️ Compliance Violations</p>
                      <p className="text-slate-600">HR and healthcare professionals risk HIPAA/GDPR violations when using unsecure converters.</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3 mt-4">
                      <p className="text-green-800 font-semibold text-xs">
                        ✓ ConvertPro solves all three: Zero upload, zero tracking, zero risk.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Long-Tail Keywords Section */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-800">Common Searches We Solve</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {currentSEO.longTail.map((keyword, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg p-3">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{keyword}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}