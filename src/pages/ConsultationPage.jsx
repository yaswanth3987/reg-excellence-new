import useSEO from '../hooks/useSEO';
import ConsultationForm from '../components/ConsultationForm';

export default function ConsultationPage() {
  useSEO({
    title: 'Book a Consultation | Reg Excellence',
    description: 'Speak to a Regulatory Affairs Consultant. Complete the form to discuss your regulatory needs.',
  });

  return (
    <>
      <ConsultationForm />
    </>
  );
}
