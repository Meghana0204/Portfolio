import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  padding: 8rem 0 6rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

  span {
    background: ${({ theme }) => theme.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.gradientAccent};
    margin: 0.75rem auto 0;
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Intro = styled.div`
  h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.textPrimary};
  }
  p {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DetailIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.accentIndigo};
  transition: transform 0.2s ease, background 0.2s ease;

  ${DetailItem}:hover & {
    transform: scale(1.1);
    background: ${({ theme }) => theme.accentIndigoGlow};
  }
`;

const DetailText = styled.div`
  h5 {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textMuted};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.25rem;
  }
  a, p {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textPrimary};
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.accentIndigo};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialBtn = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.accentIndigoGlow};
    color: ${({ theme }) => theme.accentIndigo};
    border-color: ${({ theme }) => theme.accentIndigo};
  }
`;

const FormPanel = styled.form`
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadowMd};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const FormControl = styled.input`
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  font-family: inherit;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textPrimary};
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.accentIndigo};
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.15);
  }
`;

const TextArea = styled.textarea`
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlass};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  font-family: inherit;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textPrimary};
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.accentIndigo};
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.15);
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background: ${({ theme }) => theme.gradientBtn};
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s ease, filter 0.2s ease;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
    filter: brightness(1.1);
  }
`;

const slideUp = keyframes`
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10000;
  background: ${({ theme }) => theme.bgGlass};
  border: 1px solid ${({ theme }) => theme.borderGlassHover};
  border-left: 4px solid ${({ theme }) => theme.accentEmerald};
  color: ${({ theme }) => theme.textPrimary};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadowLg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: ${slideUp} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

  i {
    color: ${({ theme }) => theme.accentEmerald};
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSuccess, setToastSuccess] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: "405d4300-e0a2-427c-9629-625d8d5d1a69", // Your registered Web3Forms access key
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setToastSuccess(true);
          setToastMessage('Thank you! Your message has been sent successfully.');
          setShowToast(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setShowToast(false), 4000);
        } else {
          setToastSuccess(false);
          setToastMessage('Something went wrong. Please try again.');
          setShowToast(true);
          setTimeout(() => setShowToast(false), 4000);
        }
      } catch (error) {
        setToastSuccess(false);
        setToastMessage('Error sending message. Please check your connection.');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Section>
      <div className="container">
        <SectionTitle>Get In <span>Touch</span></SectionTitle>
        <Grid>
          <InfoPanel>
            <Intro>
              <h3>Let's collaborate!</h3>
              <p>I am seeking software developer positions, internship opportunities, and collaborative full-stack projects. Feel free to reach out via email or drop a message using the form.</p>
            </Intro>
            
            <DetailsList>
              <DetailItem>
                <DetailIcon><i className="fas fa-envelope"></i></DetailIcon>
                <DetailText>
                  <h5>Email</h5>
                  <a href="mailto:meghana020404@gmail.com">meghana020404@gmail.com</a>
                </DetailText>
              </DetailItem>
              <DetailItem>
                <DetailIcon><i className="fas fa-phone"></i></DetailIcon>
                <DetailText>
                  <h5>Phone</h5>
                  <p>+91 7019893881</p>
                </DetailText>
              </DetailItem>
              <DetailItem>
                <DetailIcon><i className="fas fa-map-marker-alt"></i></DetailIcon>
                <DetailText>
                  <h5>Location</h5>
                  <p>Bangalore, India (Open to Remote / US shifts)</p>
                </DetailText>
              </DetailItem>
            </DetailsList>
            
            <SocialLinks>
              <SocialBtn href="https://linkedin.com/in/meghana-pradeep-29b01329b" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </SocialBtn>
              <SocialBtn href="https://github.com/Meghana0204" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </SocialBtn>
            </SocialLinks>
          </InfoPanel>
          
          <FormPanel onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Full Name</label>
              <FormControl 
                type="text" 
                id="name" 
                name="name"
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email Address</label>
              <FormControl 
                type="email" 
                id="email" 
                name="email"
                placeholder="john@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <FormControl 
                type="text" 
                id="subject" 
                name="subject"
                placeholder="Collaboration Request" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message</label>
              <TextArea 
                id="message" 
                name="message"
                placeholder="Hey Meghana, let's connect..." 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane"></i>
            </Button>
          </FormPanel>
        </Grid>
      </div>

      {showToast && (
        <Toast style={{ borderLeftColor: toastSuccess ? undefined : '#ef4444' }}>
          <i className={toastSuccess ? "fas fa-check-circle" : "fas fa-exclamation-circle"} style={{ color: toastSuccess ? undefined : '#ef4444' }}></i>
          <span>{toastMessage}</span>
        </Toast>
      )}
    </Section>
  );
}
