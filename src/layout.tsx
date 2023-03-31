import StyledComponentsWrapper from './components/StyledComponentsWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <StyledComponentsWrapper>{children}</StyledComponentsWrapper>
      </body>
    </html>
  );
}
