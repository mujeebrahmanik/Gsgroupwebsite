import Pagebanner from '@/components/common/Pagebanner'
import ServiceDetailSection from '@/components/services/ServiceDetailSection'
import CTASection from '@/components/common/CTASection'

const scopeOfWork = [
    {
        title: 'Pipe Freezing Services',
        description: 'Advanced pipe freezing techniques to isolate sections of live piping systems without full shutdown.',
    },
    {
        title: 'Pressurized Pipe Isolation',
        description: 'Safe isolation of pressurized pipes using controlled freeze plugs, eliminating the need for drainage.',
    },
    {
        title: 'Valve Replacement',
        description: 'Replacement of faulty or aging valves on live systems while maintaining upstream and downstream operation.',
    },
    {
        title: 'Pipe Repair & Modification',
        description: 'Repair and modification of piping sections including cuts, joins and reroutes while the system remains active.',
    },
    {
        title: 'Fitting Replacement',
        description: 'Replacement of flanges, unions, gaskets and other fittings without draining or shutting down the system.',
    },
    {
        title: 'Controlled Pipe Freezing',
        description: 'Precise controlled freezing techniques to form solid ice plugs that safely isolate the working area.',
    },
    {
        title: 'System Thawing',
        description: 'Controlled thawing of frozen pipe sections to safely restore flow after work completion.',
    },
    {
        title: 'Leak Testing',
        description: 'Comprehensive leak testing after repairs to verify integrity of new connections and modifications.',
    },
    {
        title: 'System Restoration',
        description: 'Full system restoration ensuring pressure, flow and performance return to normal operating conditions.',
    },
    {
        title: 'Testing & Commissioning',
        description: 'Final testing and commissioning to confirm safe reliable operation of the restored piping system.',
    },
]

export default function PipingFreezingPage() {
    return (
        <div>
            <Pagebanner
                breadcrumbs={[
                    { title: 'Services', link: '/services' },
                    { title: 'Piping Freezing' },
                ]}
                image='/images/PIPE FREEZING/PIPE FREEZING.png'
                title={<>Pipe Freezing <br /><span className='text-muted'>Services</span></>}
                content='Professional pipe freezing services for maintenance, repair and valve replacement without complete system shutdown — enabling critical work on live pressurised systems with zero drainage.'
            />

            <ServiceDetailSection
                title='Scope of Work'
                services={scopeOfWork}
                bg='bg-white'
            />

            <CTASection />
        </div>
    )
}
