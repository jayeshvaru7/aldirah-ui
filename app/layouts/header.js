import Link from 'next/link'
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex justify-between items-start xl:mt-16 lg:mt-16 md:mt-1 mt-[20px] custom-container pb-6 m-auto">
          <Link href="/" className="pt-[25px]">
            <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1.25" x2="32" y2="1.25" stroke="black" strokeWidth="1.5"/>
              <line y1="9.25" x2="32" y2="9.25" stroke="black" strokeWidth="1.5"/>
              <line y1="17.25" x2="32" y2="17.25" stroke="black" strokeWidth="1.5"/>
            </svg>
          </Link>

          <Link className="logo" href="/">
              <Image src="../images/logo.svg" height={64}  width={86}  alt="DIRHA"  loading="lazy" quality={100} />
          </Link>

          <div className="menu hover:text-[#BA9B7E] group cursor-pointer flex items-center gap-2">
              <svg className="group-hover:fill-[#BA9B7E] transition-all duration-300 fill-black" fill="black" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 28C14.3485 28 12.7929 27.6844 11.3333 27.0533C9.87379 26.4222 8.60267 25.5644 7.52001 24.48C6.43734 23.3956 5.57956 22.1244 4.94667 20.6667C4.31379 19.2089 3.99823 17.6533 4.00001 16C4.00001 14.344 4.31556 12.7871 4.94667 11.3293C5.57779 9.87156 6.43556 8.60178 7.52001 7.52C8.60445 6.43822 9.87556 5.58089 11.3333 4.948C12.7911 4.31511 14.3467 3.99911 16 4C17.656 4 19.2129 4.31556 20.6707 4.94667C22.1285 5.57778 23.3987 6.43556 24.4813 7.52C25.564 8.60445 26.4209 9.87422 27.052 11.3293C27.6831 12.7844 27.9991 14.3413 28 16C28 17.6516 27.6845 19.2071 27.0533 20.6667C26.4222 22.1262 25.5645 23.3973 24.48 24.48C23.3956 25.5627 22.1258 26.4204 20.6707 27.0533C19.2156 27.6862 17.6587 28.0018 16 28ZM16 26.6773C16.7822 25.672 17.4276 24.6849 17.936 23.716C18.4445 22.7471 18.8573 21.6627 19.1747 20.4627H12.8253C13.1773 21.7302 13.5987 22.8484 14.0893 23.8173C14.58 24.7862 15.2169 25.7396 16 26.6773ZM14.3027 26.4773C13.6805 25.744 13.1125 24.8373 12.5987 23.7573C12.0849 22.6782 11.7027 21.5796 11.452 20.4613H6.33734C7.10178 22.12 8.1849 23.48 9.58667 24.5413C10.9885 25.6027 12.56 26.248 14.3013 26.4773M17.696 26.4773C19.4365 26.248 21.008 25.6027 22.4107 24.5413C23.8133 23.48 24.8965 22.12 25.66 20.4613H20.548C20.2102 21.5964 19.7849 22.704 19.272 23.784C18.7582 24.8631 18.2329 25.7609 17.696 26.4773ZM5.79334 19.128H11.1733C11.072 18.5813 11.0009 18.0484 10.96 17.5293C10.9173 17.0102 10.896 16.5004 10.896 16C10.896 15.4996 10.9169 14.9898 10.9587 14.4707C11.0005 13.9516 11.0716 13.4182 11.172 12.8707H5.79601C5.65112 13.3329 5.53779 13.8364 5.45601 14.3813C5.37423 14.9262 5.33334 15.4658 5.33334 16C5.33334 16.5342 5.37379 17.0738 5.45467 17.6187C5.53556 18.1636 5.6489 18.6667 5.79467 19.128M12.508 19.128H19.492C19.5933 18.5813 19.6645 18.0569 19.7053 17.5547C19.7462 17.0524 19.768 16.5342 19.7707 16C19.7733 15.4658 19.7525 14.9476 19.708 14.4453C19.6636 13.9431 19.5925 13.4187 19.4947 12.872H12.5067C12.4062 13.4187 12.3351 13.9431 12.2933 14.4453C12.2516 14.9476 12.2307 15.4658 12.2307 16C12.2307 16.5342 12.2516 17.0524 12.2933 17.5547C12.3351 18.0569 12.4076 18.5813 12.508 19.128ZM20.8267 19.128H26.2053C26.3502 18.6658 26.4636 18.1627 26.5453 17.6187C26.6271 17.0747 26.6676 16.5351 26.6667 16C26.6658 15.4649 26.6253 14.9253 26.5453 14.3813C26.4653 13.8373 26.352 13.3342 26.2053 12.872H20.8253C20.9267 13.4187 20.9978 13.9516 21.0387 14.4707C21.0813 14.9898 21.1027 15.4996 21.1027 16C21.1027 16.5004 21.0818 17.0102 21.04 17.5293C20.9982 18.0484 20.9271 18.5818 20.8267 19.1293M20.5493 11.5387H25.6613C24.88 9.84622 23.8098 8.48622 22.4507 7.45867C21.0907 6.43111 19.5062 5.77778 17.6973 5.49867C18.3196 6.31645 18.8791 7.25245 19.376 8.30667C19.8729 9.36089 20.264 10.4382 20.5493 11.5387ZM12.8253 11.5387H19.1747C18.8227 10.2871 18.3885 9.15556 17.872 8.144C17.3556 7.13245 16.7316 6.192 16 5.32267C15.2685 6.19111 14.6445 7.13156 14.128 8.144C13.6125 9.15556 13.1782 10.2871 12.8253 11.5387ZM6.33867 11.5387H11.4507C11.7369 10.4373 12.128 9.36 12.624 8.30667C13.12 7.25333 13.6796 6.31689 14.3027 5.49734C12.4769 5.77734 10.8885 6.43511 9.53734 7.47067C8.18623 8.50622 7.11956 9.86178 6.33734 11.5373" fill="black">
                  </path>
              </svg>
              <span className="text-sm text-black">
                  عربي
              </span>
          </div>
      </div>
      <div className="custom-container p-0 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-12rem)] xl:w-[calc(100%-14rem)] h-[1px] bg-[#BA9B7E]">
      </div>
  </div>
  );
}
