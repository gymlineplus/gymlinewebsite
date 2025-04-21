"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header1() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Opening a gym today is tough, from finding quality equipment to staying competitive.",
      items: [
        {
          title: "Cardio",
          href: "/cardio",
        },
        {
          title: "Strength",
          href: "/strength",
        },
        {
          title: "Srength Plate Loaded",
          href: "/strength-plate-loaded",
        }
        ,
        {
          title: "Benches and racks",
          href: "/benches-and-racks",
        },
        {
          title: "Free Weights & others",
          href: "/free-weights-and-others",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
        {
          title: "Gym Setup",
          href: "/gym-setup",
        },
        {
          title: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          title: "Terms of Service",
          href: "/terms-of-service",
        },
      ],
    },
    // {
    //   title: "Gym Setup",
    //   description: "We have the best gym setup for you.",
    // }
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                      <Link href={item.href}>
                        <Button variant="ghost">
                          {item.title}
                        </Button>
                      </Link>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              See Collection
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <Link
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          {/* logo image */}
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={"190"}
              height={"50"}
              alt="gymline logo image"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex justify-end w-full gap-4">
          <Link href={"/contact"}>
            <Button variant="default" className="hidden hover:bg-white hover:text-black border-2 border-black animate-in  md:inline rounded-full">
              Book Appointment
            </Button>
          </Link>
          {/* <div className="border-r hidden md:inline"></div>
                    <Button variant="outline">Sign in</Button>
                    <Button>Get started</Button> */}
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button className="cursor-pointer" variant="ghost" onClick={() => setOpen(!isOpen)} >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5 cursor-pointer" />
            )}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex p-2 flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item, index) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem, index) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center"
                          onClick={
                            () => {
                              setOpen(!isOpen)
                            }
                          }
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export { Header1 };
