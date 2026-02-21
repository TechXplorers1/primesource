import React from 'react';
import '../index.css';

const icons = {
    server: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
    shieldCheck: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    cloudCog: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5v-3.75M12 12.75l-2.25 2.25M12 12.75l2.25 2.25M19.5 10.5C19.5 7.186 16.814 4.5 13.5 4.5c-2.427 0-4.516 1.438-5.467 3.51a5.25 5.25 0 00-4.032 6.037 4.5 4.5 0 004.999 4.453H18a4.5 4.5 0 001.5-8.75z" /></svg>,
    window: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18V6zM6 6h.008v.008H6V6zM9 6h.008v.008H9V6zM12 6h.008v.008H12V6z" /></svg>,
    hierarchy: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>,
    lineChart: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l5-5 4 4 5-5" /></svg>,
    lock: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
    code: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
    checkCircle: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
};

const capabilitiesData = [
    { icon: icons.server, title: 'IT Infrastructure Services' },
    { icon: icons.shieldCheck, title: 'Cybersecurity & Risk Management' },
    { icon: icons.cloudCog, title: 'Cloud Solutions' },
    { icon: icons.window, title: 'Software Development' },
    { icon: icons.hierarchy, title: 'Systems Engineering' },
    { icon: icons.lineChart, title: 'Data Analytics' },
    { icon: icons.lock, title: 'Network Security' },
    { icon: icons.code, title: 'Federal IT Modernization' }
];

const differentiators = [
    "Agile execution & rapid deployment",
    "Secure development lifecycle (DevSecOps)",
    "Compliance-driven delivery framework",
    "Cleared professionals with mission-critical experience",
    "Deep federal acquisition knowledge"
];

const naicsCodes = [
    { code: '541511', desc: 'Custom Computer Programming' },
    { code: '541512', desc: 'Computer Systems Design' },
    { code: '541513', desc: 'Computer Facilities Mgmt' },
    { code: '541519', desc: 'Other Computer Services' },
    { code: '541330', desc: 'Engineering Services' },
    { code: '541990', desc: 'Professional Services' }
];

const Capabilities = () => {
    return (
        <div className="page-container" style={{ background: '#ffffff', minHeight: '100vh', padding: '60px 20px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1050px', width: '100%', display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

                {/* Left Column */}
                <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '50px' }}>

                    {/* Core Competencies */}
                    <section>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '8px', letterSpacing: '-0.2px' }}>Core Competencies</h2>
                        <div style={{ width: '190px', height: '2px', backgroundColor: 'var(--accent-color)', marginBottom: '30px' }}></div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '15px' }}>
                            {capabilitiesData.map((item, index) => (
                                <div key={index} style={{
                                    background: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: '6px',
                                    padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '15px',
                                    color: '#334155', fontSize: '0.85rem', fontWeight: 500, boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
                                }}>
                                    <div style={{ color: 'var(--primary-color)' }}>{item.icon}</div>
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key Differentiators */}
                    <section>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '8px', letterSpacing: '-0.2px' }}>Key Differentiators</h2>
                        <div style={{ width: '190px', height: '2px', backgroundColor: 'var(--accent-color)', marginBottom: '30px' }}></div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {differentiators.map((diff, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569', fontSize: '0.9rem' }}>
                                    <div style={{ color: 'var(--accent-color)' }}>{icons.checkCircle}</div>
                                    {diff}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div style={{ width: '320px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden', backgroundColor: 'var(--primary-color)', color: '#f8fafc', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                    <div style={{ backgroundColor: 'var(--accent-color)', padding: '16px 24px' }}>
                        <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.2px' }}>Company Data</h3>
                    </div>

                    <div style={{ padding: '24px' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '4px' }}>Legal Name</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>PrimeSource</div>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '4px' }}>Business Type</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Small Business</div>
                        </div>
                        <div style={{ height: '1px', backgroundColor: '#1e293b', margin: '20px 0' }}></div>



                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '16px' }}>Primary NAICS Codes</h4>

                        <div style={{ border: '1px solid #1e293b', borderRadius: '6px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {naicsCodes.map((item, index) => (
                                <div key={index} style={{ display: 'flex', gap: '12px', fontSize: '0.75rem' }}>
                                    <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>{item.code}</span>
                                    <span style={{ color: '#cbd5e1' }}>{item.desc}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ height: '1px', backgroundColor: '#1e293b', margin: '24px 0' }}></div>

                        <div>
                            <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CONTACT</div>
                            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                                309 Benthic Ln<br />
                                Laurel, MD 20724
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Capabilities;
