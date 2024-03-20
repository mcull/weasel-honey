import * as React from "react";
import styled from "styled-components";

const plans = [
    {
      name: "Plan 1 name",
      price: 5,
      features: ["Feature", "Feature", "Feature", "Feature"],
    },
    {
      name: "Plan 2 name",
      price: 10,
      features: ["Feature", "Feature", "Feature", "Feature"],
    },
    {
      name: "Plan 3 name",
      price: 20,
      features: ["Feature", "Feature", "Feature", "Feature"],
    },
  ];

  const faqs = [
    {
      question: "What's the most frequently asked question?",
      answer:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
    {
      question: "How about a second one?",
      answer: "",
    },
    {
      question: "And a third?",
      answer: "",
    },
  ];

const Pricing = () => (
    <PageWrapper>
      <Header>
        <SiteName>Site name</SiteName>
        <Navigation>
          <NavLink>Page</NavLink>
          <NavLink>Page</NavLink>
          <NavLink>Page</NavLink>
          <Button>Button</Button>
        </Navigation>
      </Header>
      <PageTitle>Pricing page title</PageTitle>
      <PageSubtitle>
        And a subheading describing your pricing plans, too
      </PageSubtitle>
      <PlanToggle>
        <PlanToggleButton isActive>Monthly plans</PlanToggleButton>
        <PlanToggleButton>Annual plans</PlanToggleButton>
      </PlanToggle>
      <PlanGrid>
        {plans.map((plan, index) => (
          <PlanCard key={index}>
            <PlanName>{plan.name}</PlanName>
            <PlanPrice>
              <PlanPriceAmount>${plan.price}</PlanPriceAmount>
              <PlanPricePeriod>per month</PlanPricePeriod>
            </PlanPrice>
            {plan.features.map((feature, index) => (
              <PlanFeature key={index}>{feature}</PlanFeature>
            ))}
            <PlanButton>Select</PlanButton>
          </PlanCard>
        ))}
      </PlanGrid>
      <FaqTitle>Heading for FAQs</FaqTitle>
      {faqs.map((faq, index) => (
        <FaqItem key={index}>
          <FaqQuestion>
            {faq.question}
            <FaqToggle>+</FaqToggle>
          </FaqQuestion>
          {faq.answer && <FaqAnswer>{faq.answer}</FaqAnswer>}
        </FaqItem>
      ))}
      <Footer>
        <FooterDivider />
        <FooterContent>
          <FooterInfo>
            <FooterSiteName>Site name</FooterSiteName>
            <SocialIcons>
              <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1cbc6d58a74886c4d18e6f63acf6123066f74c5a476279d3a0ea678601ba09e?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Social Icon" />
              <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1bac3668b19309ab1c82835d154f9962b24bad9c262723d53374e3173c3e762?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Social Icon" />
              <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c8d64becb556072cf4288b2dadd32d18a3ce8e19d5cc15f298f66d1125313b?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Social Icon" />
              <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/0828515f09127d365461d17e1036e88788811bd5c0258116139d171a870fbe56?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Social Icon" />
            </SocialIcons>
          </FooterInfo>
          <FooterLinks>
            <FooterLinkColumn>
              <FooterLinkTitle>Topic</FooterLinkTitle>
              <FooterLink>Page</FooterLink>
              <FooterLink>Page</FooterLink>
              <FooterLink>Page</FooterLink>
            </FooterLinkColumn>
            <FooterLinkColumn>
              <FooterLinkTitle>Topic</FooterLinkTitle>
              <FooterLink>Page</FooterLink>
              <FooterLink>Page</FooterLink>
              <FooterLink>Page</FooterLink>
            </FooterLinkColumn>
            <FooterLinkColumn>
              <FooterLinkTitle>Topic</FooterLinkTitle>
              <FooterLink>Page</FooterLink>
              <FooterLink>Page</FooterLink>
              <FooterLink>Page</FooterLink>
            </FooterLinkColumn>
          </FooterLinks>
        </FooterContent>
      </Footer>
    </PageWrapper>
  );

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  max-width: 1279px;
  padding: 56px 80px;
  gap: 20px;
  font-size: 20px;
  color: #000;
  font-weight: 500;
  line-height: 150%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const SiteName = styled.div`
  font-family: Inter, sans-serif;
  margin: auto 0;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const NavLink = styled.a`
  font-family: Inter, sans-serif;
  margin: auto 0;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  border-radius: var(--Spacing-XS, 8px);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  background-color: #000;
  color: #fff;
  font: 16px Inter, sans-serif;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const PageTitle = styled.h1`
  margin-top: 80px;
  color: #000;
  text-align: center;
  letter-spacing: -1.28px;
  font: 700 64px Inter, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
  }
`;

const PageSubtitle = styled.p`
  margin-top: 24px;
  color: #828282;
  text-align: center;
  font: 400 24px/150% Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PlanToggle = styled.div`
  display: flex;
  margin-top: 24px;
  padding: 8px;
  gap: 8px;
  border-radius: 12px;
  background-color: #f5f5f5;
  font-size: 16px;
  color: #000;
  font-weight: 500;
  line-height: 150%;
`;

const PlanToggleButton = styled.button`
  padding: 8px 16px;
  border-radius: var(--Spacing-XS, 8px);
  font-family: Inter, sans-serif;
  background-color: ${(props) => (props.isActive ? "#fff" : "#f5f5f5")};
`;

const PlanGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  max-width: 1279px;
  margin-top: 41px;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 40px;
    gap: 0;
  }
`;

const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: calc(33% - 20px);
  margin: 0 auto;
  padding: 48px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1),
    0px 4px 6px -4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #828282;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 32px;
    padding: 0 20px;
  }
`;

const PlanName = styled.h3`
  color: #000;
  font: 500 16px/150% Inter, sans-serif;
`;

const PlanPrice = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 8px;
  color: #000;
`;

const PlanPriceAmount = styled.div`
  font: 600 40px/110% Inter, sans-serif;
`;

const PlanPricePeriod = styled.div`
  align-self: start;
  margin-top: 20px;
  font: 500 16px/150% Inter, sans-serif;
`;

const PlanFeature = styled.div`
  margin-top: 12px;
  font: 500 20px/150% Inter, sans-serif;

  &:first-of-type {
    margin-top: 32px;
  }
`;

const PlanButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  padding: 14px 60px;
  border-radius: var(--Spacing-XS, 8px);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  background-color: #000;
  color: #fff;
  font: 500 16px/150% Inter, sans-serif;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const FaqTitle = styled.h2`
  margin-top: 108px;
  color: #000;
  font: 600 40px/110% Inter, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FaqItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1259px;
  margin-top: 32px;
  gap: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const FaqQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font: 400 24px/150% Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FaqToggle = styled.button`
  color: #828282;
  font: 600 40px/110% Inter, sans-serif;
`;

const FaqAnswer = styled.div`
  color: #828282;
  font: 500 20px/150% Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 120px;
  padding: 0 80px 48px;
  background-color: #fff;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const FooterDivider = styled.hr`
  height: 1px;
  border: none;
  background-color: #e6e6e6;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 47px;
  gap: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  margin-top: 13px;
`;

const FooterSiteName = styled.div`
  color: #000;
  font: 400 24px/150% Inter, sans-serif;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 97px;
  gap: 8px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SocialIcon = styled.img`
  width: 40px;
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-grow: 1;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33%;
  margin-left: 20px;
  font-size: 16px;
  color: #454545;
  font-weight: 500;
  white-space: nowrap;
  line-height: 150%;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 31px;
    white-space: initial;
  }
`;

const FooterLinkTitle = styled.div`
  color: #000;
  font-family: Inter, sans-serif;
`;

const FooterLink = styled.a`
  margin-top: 24px;
  font-family: Inter, sans-serif;
`;

export default Pricing;