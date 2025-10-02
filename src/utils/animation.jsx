import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      display: "block",
    })
    .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
      onComplete: () => {
        gsap.set([bannerOne, bannerTwo, bannerThree, bannerFour], { display: "none" });
      }
    })
  }
}

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
      display: "block", // Ensure visible at start
    })
    .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        // Hide banners after animation
        gsap.set([bannerOne, bannerTwo, bannerThree, bannerFour], { display: "none" });
        router.push(href)
      },
    })
  }
}