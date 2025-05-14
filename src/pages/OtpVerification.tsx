
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { toast as sonnerToast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Loader2 } from "lucide-react";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const { tempUser, verifyOTP, resendOTP } = useUser();
  const { toast } = useToast();
  const navigate = useNavigate();

  // If there's no temp user, redirect to register
  useEffect(() => {
    if (!tempUser) {
      navigate("/register");
    }
  }, [tempUser, navigate]);

  // Countdown timer for resend button
  useEffect(() => {
    let timer: number | undefined;
    if (countdown > 0) {
      timer = window.setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP code.",
      });
      return;
    }

    setIsVerifying(true);
    
    try {
      const success = await verifyOTP(otp);
      
      if (success) {
        sonnerToast.success("Account verified successfully");
        navigate("/user-dashboard");
      } else {
        toast({
          variant: "destructive",
          title: "Verification failed",
          description: "The OTP code is incorrect. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Verification error",
        description: "An error occurred during verification. Please try again.",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    
    try {
      const success = await resendOTP();
      
      if (success) {
        setCountdown(30);
        sonnerToast.success("OTP code resent successfully");
      } else {
        toast({
          variant: "destructive",
          title: "Failed to resend",
          description: "Could not resend OTP code. Please try again later.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Resend error",
        description: "An error occurred while resending OTP. Please try again.",
      });
    } finally {
      setIsResending(false);
    }
  };

  if (!tempUser) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Verify Your Account</CardTitle>
            <CardDescription className="text-center">
              We've sent a verification code to{" "}
              <span className="font-medium">{tempUser?.email}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-secondary/20 rounded-full p-3">
                <Mail className="h-8 w-8 text-edu-primary" />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Enter the 6-digit code sent to your email
              </p>
            </div>

            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
                render={({ slots }) => (
                  <InputOTPGroup className="gap-2">
                    {slots.map((slot, index) => (
                      <React.Fragment key={index}>
                        <InputOTPSlot
                          className="w-10 h-12 text-center text-2xl border-input"
                          {...slot}
                          index={index}
                        />
                        {index !== slots.length - 1 && index % 3 === 2 && (
                          <InputOTPSeparator />
                        )}
                      </React.Fragment>
                    ))}
                  </InputOTPGroup>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button 
              onClick={handleVerify} 
              className="w-full bg-edu-primary hover:bg-edu-primary/90" 
              disabled={isVerifying || otp.length !== 6}
            >
              {isVerifying ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Verifying...</span>
                </div>
              ) : (
                "Verify Account"
              )}
            </Button>
            <div className="text-center text-sm">
              Didn't receive code?{" "}
              {countdown > 0 ? (
                <span className="text-muted-foreground">
                  Resend in {countdown}s
                </span>
              ) : (
                <button
                  onClick={handleResend}
                  className="text-edu-primary hover:underline font-medium"
                  disabled={isResending}
                >
                  {isResending ? "Resending..." : "Resend Code"}
                </button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default OtpVerification;
