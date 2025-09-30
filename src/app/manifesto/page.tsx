import { Header } from '@/components/Header/Header'

export default function TextPage() {
    return (
        <>
            <div className="bg-gradient-dots">
                <section className="relative mx-3 lg:mx-5 flex flex-col">
                    {/* horizontal gradient lines */}
                    <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
                    <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />
                    
                    {/* vertical gradient lines */}
                    <span className="absolute top-0 left-0 h-full w-px border-y-gradient" />
                    <span className="absolute top-0 right-0 h-full w-px border-y-gradient" />

                    <div className="min-h-screen flex items-center justify-center px-4 lg:px-14 pt-4 pb-8">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-xl lg:text-3xl font-bold text-white mb-8 text-center">
                                Manifesto
                            </h1>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-lg lg:text-xl text-[#CFDAE5] leading-relaxed mb-6">
When it takes hours to export, clean, and import master data into NetSuite, <b>something is wrong.</b>
<br/><br/>
When it takes days to design roles, assign them to users, craft their dashboards, and set up custom notifications/alerts, <b>something is wrong</b>.
<br/><br/>
When it takes weeks to write an integration between NetSuite and an external system, <b>something is wrong</b>.
<br/><br/>
<b>When a NetSuite implementation takes 6 months, something is definitely wrong</b>.
<br/><br/>
And the consequences are brutal:
<br/><br/>
<ol className="list-decimal list-outside ml-6">
<li>Businesses are distracted from growing their business, with staff working a second job hand holding consultants.</li>
<li>Consultants are slow and inefficient, because they lack modern tooling to develop, test, and deploy their work.</li>
<li>NetSuite is stuck with a horrific time-to-value proposition, unable to deliver value to end users for months.</li>
</ol>
<br/>
As a team of NetSuite consultants and software engineers, we’ve felt this pain. So we decided to do something about it.
<br/><br/>
<b>We are building Cadbury, an AI powered NetSuite consultant that executes tasks in minutes, rather than weeks.</b>
<br/><br/>
It’s early days, and we have a lot of surface area to cover. NetSuite is a complex product, serving niches and sub-niches. Our challenge is to (1) understand the labor, (2) process engineer it, and (3) automate it in software.
<br/><br/>
Our goal is to save businesses their most valuable resource: time. 
<br/><br/>
If that’s interesting to you, please reach out (manish@trycadbury.com).
<br/><br/>

Manish Sinha
<br/>
NetSuite Consultant @ ERPGuy.com
<br/>
Founder, CEO of Cadbury

                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
