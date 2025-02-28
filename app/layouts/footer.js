import Link from 'next/link'
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-[#ba9b7e] py-0 lg:py-12 xl:py-12 relative">
      <div className="custom-container m-auto pb-0">

        {/* Newsletter SM */}
          <div className="lg:hidden xl:hidden w-full bg-[#e9e4d9] p-6 flex-col justify-between mb-[60px]">
              <div className="mb-8">
                  <h3 className="text-[32px] font-normal text-[#424242] leading-[38.4px]">Subscribe to our newsletter</h3>
              </div>
              <div className="relative mt-[100px] ">
                  <div className="flex items-center justify-between border-b border-[#424242] pb-2">
                      <input className="w-full bg-transparent text-sm text-[#424242] outline-none placeholder:text-[#424242]" placeholder="your@email.ru" type="email"></input>
                      <button className="ml-2"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M8 11L13 6M13 6L8 1M13 6L1 6" stroke="#424242" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                  </div>
              </div>
          </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex flex-col lg:flex-row footer_flex lg:items-start justify-between- gap-6">
                <div className="logo flex items-center gap-2">
                  <div className="pr-6">
                    <Link href="/">
                      <svg width="109" height="100" viewBox="0 0 109 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2675 63.6528C14.5035 63.6528 13.8658 63.7664 13.3544 63.9874L7.81055 79.7601H11.0623L12.3757 75.8391H17.8942L19.2581 79.7601H22.6551L17.5154 65.1303C17.1933 64.1453 16.4483 63.6465 15.2675 63.6465V63.6528ZM12.9944 73.4523L15.1665 66.6394L17.2691 73.4523H12.9881H12.9944Z" fill="#424242"/>
                        <path d="M32.5246 77.1078H27.8648V65.515C27.8648 64.9089 27.6817 64.4479 27.3155 64.1322C26.9492 63.8102 26.4125 63.6523 25.7117 63.6523C25.4591 63.6523 25.0739 63.6902 24.5625 63.7723V79.7597H34.4125C34.4441 79.6965 34.4631 79.3808 34.4631 78.8063C34.4631 77.676 33.819 77.1078 32.5309 77.1078H32.5246Z" fill="#424242"/>
                        <path d="M41.3394 63.6016C39.824 63.6016 38.3276 63.6963 36.8438 63.8857V79.7594H41.9329C43.4925 79.7594 44.8438 79.4311 45.9866 78.7807C47.1232 78.1304 48.0071 77.1706 48.6259 75.9141C49.2447 74.6576 49.5604 73.1801 49.5604 71.4942C49.5604 68.8802 48.8722 66.9165 47.4957 65.5905C46.1192 64.2645 44.0671 63.6079 41.3394 63.6079V63.6016ZM45.0711 75.8889C44.307 76.7981 43.1011 77.2527 41.4594 77.2527H40.146V66.2346C40.6575 66.184 41.131 66.1651 41.5793 66.1651C43.1389 66.1651 44.307 66.6071 45.0711 67.4911C45.8351 68.375 46.2202 69.7263 46.2202 71.5447C46.2202 73.54 45.8414 74.9859 45.0711 75.8952V75.8889Z" fill="#424242"/>
                        <path d="M53.6511 63.6523C53.3986 63.6523 53.0134 63.6902 52.502 63.7723V79.7597H55.779V65.515C55.779 64.2711 55.0718 63.6523 53.6511 63.6523Z" fill="#424242"/>
                        <path d="M69.1958 71.2484C69.7325 70.4339 69.9977 69.4615 69.9977 68.3313C69.9977 66.7212 69.4483 65.5278 68.3623 64.7575C67.27 63.9872 65.5841 63.5957 63.3047 63.5957C61.8524 63.5957 60.4444 63.6778 59.0742 63.8356V79.7536H62.3702V73.7299H63.6835L66.4112 78.3644C66.7459 78.939 67.1121 79.3558 67.5099 79.6083C67.9077 79.8609 68.4002 79.9872 68.9937 79.9872C69.6504 79.9872 70.2818 79.8546 70.9069 79.5831L66.9606 72.9848C67.914 72.6312 68.6591 72.0503 69.1958 71.2421V71.2484ZM65.7546 70.7749C65.2179 71.2674 64.4602 71.5136 63.4752 71.5136H62.3513V65.9951C62.4965 65.9761 62.667 65.9635 62.8753 65.9446C63.0837 65.9256 63.3299 65.9193 63.6141 65.9193C64.618 65.9193 65.3568 66.1403 65.8366 66.5886C66.3165 67.0369 66.5565 67.7188 66.5565 68.6407C66.5565 69.5626 66.2913 70.2761 65.7546 70.7686V70.7749Z" fill="#424242"/>
                        <path d="M79.0078 63.6528C78.2438 63.6528 77.606 63.7664 77.0946 63.9874L71.5508 79.7601H74.8026L76.1159 75.8391H81.6344L82.9983 79.7601H86.3953L81.2556 65.1303C80.9336 64.1453 80.1885 63.6465 79.0078 63.6465V63.6528ZM76.741 73.4523L78.9131 66.6394L81.0157 73.4523H76.7347H76.741Z" fill="#424242"/>
                        <path d="M98.8027 63.6523C98.4807 63.6523 98.0829 63.6902 97.6093 63.7723V70.2506H91.5856V65.515C91.5856 64.2711 90.8784 63.6523 89.4578 63.6523C89.2052 63.6523 88.82 63.6902 88.3086 63.7723V79.7597H91.5856V72.8268H97.6093V79.7597H100.886V65.515C100.886 64.8962 100.703 64.429 100.337 64.1196C99.9708 63.8102 99.4593 63.6523 98.809 63.6523H98.8027Z" fill="#424242"/>
                        <path d="M17.0726 34.2982C17.3441 33.9005 18.2281 32.8397 18.2281 30.5855C18.165 30.0804 18.0892 29.5626 17.9882 29.0386C17.2368 25.1175 15.6772 21.5563 12.5012 18.9297C9.62827 16.5555 6.62275 16.6945 4.26758 19.5421C1.04106 23.4632 -0.417506 28.0473 0.100252 33.1238C0.453843 36.5587 2.72693 38.6234 6.13656 39.0086C10.0892 39.4506 14.9006 37.4743 17.0663 34.2982H17.0726ZM4.70325 25.9762C8.17602 22.8255 11.3962 23.7473 14.0924 27.5674C14.6985 28.4261 14.7175 29.007 13.8461 29.6763C9.80507 32.7955 4.45069 31.9178 2.81533 30.7497C2.21548 30.3203 3.22575 27.3085 4.70325 25.9699V25.9762Z" fill="#424242"/>
                        <path d="M107.485 5.28424C106.98 3.67413 106.475 2.54391 105.402 1.24951C105.376 1.22425 105.357 1.19268 105.332 1.16743C105.099 0.889605 104.846 0.618097 104.511 0.472872C103.754 0.125595 103.122 0.794893 102.642 1.30634C100.792 3.26372 99.0938 5.7578 99.4979 8.5739C99.9714 11.8572 100.357 15.2037 100.729 18.4429C100.944 20.3245 101.278 24.0435 101.518 25.9504C101.948 29.3979 102.434 33.3 103.021 37.0885C103.337 39.1153 102.863 40.9401 101.689 42.2282C100.71 43.3016 99.4032 44.1477 98.1403 44.9685C97.5026 45.3853 96.8396 45.8146 96.2461 46.2566C96.4987 46.3703 97.3574 46.2756 97.8309 46.1808C99.8767 45.7578 101.992 45.1453 103.552 43.5289C106.5 40.4729 107.807 36.7475 107.428 32.4476C107.05 28.1161 106.431 21.6947 105.768 16.4792C105.616 15.2732 105.49 13.7641 105.774 13.3853C106.589 12.2992 108.211 14.0988 108.609 12.7854C109.02 11.4089 107.921 6.64809 107.498 5.29055L107.485 5.28424Z" fill="#424242"/>
                        <path d="M90.019 44.5085C91.6733 43.675 92.8793 41.9828 93.7317 40.398C94.7988 38.4153 95.386 36.3127 95.3229 34.0586C95.2598 31.7287 94.862 29.3798 94.5841 27.0688C94.3 24.7263 93.9843 22.3838 93.5991 20.0538C93.3781 18.7026 93.0246 17.3514 92.8541 16.0002C92.6836 14.6111 92.5447 12.338 92.772 12.0033C93.5423 10.8857 94.6915 13.102 95.5755 11.8518C96.6236 10.3617 95.9291 8.05068 95.2471 6.35218C94.2242 3.79496 91.9512 1.07989 88.9393 1.32614C88.5352 1.35771 88.1311 1.44611 87.7965 1.6671C87.5186 1.85021 87.304 2.12172 87.1145 2.39954C85.7949 4.37586 85.959 6.70577 86.3695 8.93466C86.9693 12.1991 87.4871 15.5266 87.9859 18.7531C88.2763 20.6221 88.7562 24.3285 89.0719 26.2227C89.3497 27.896 89.6275 29.5755 89.9622 31.2362C90.3221 33.0294 90.7452 34.8415 90.6252 36.6853C90.5242 38.3269 88.712 38.5037 87.3987 38.2196C86.3758 38.0049 85.4476 37.3672 84.7909 36.439C82.562 33.2756 79.8533 28.1801 78.4326 25.4208C77.959 24.5053 77.2519 22.8005 76.6331 21.2914C76.2353 20.338 75.8628 19.4351 75.5976 18.8478C75.4081 18.4248 75.225 17.9828 75.0356 17.5219C74.6441 16.5558 74.2337 15.5582 73.7096 14.7247C73.6654 14.6553 73.6023 14.5732 73.5076 14.5669C73.4002 14.5669 73.274 14.6616 73.1287 14.8447C72.4026 15.8044 72.0364 17.2188 71.7333 18.3553C71.2787 20.0538 70.9756 21.8723 71.7775 23.495C72.4721 24.9031 73.2803 26.2606 73.9811 27.675C74.5178 28.7673 75.0356 29.8723 75.5281 30.9836C75.7491 31.4887 75.9638 31.9812 76.2353 32.4611C76.3931 32.7389 76.7215 33.2567 76.5573 33.585C75.4776 35.5171 74.4294 37.0199 72.7878 38.0554C70.6978 39.3814 67.6039 41.1178 64.9077 40.8841C63.6702 40.7768 62.6094 40.1012 62.2053 39.1478C61.9906 38.6489 62.0853 38.0554 62.18 37.4808C62.2748 36.881 62.4452 36.1107 62.18 35.7192C61.8517 35.233 60.7594 37.4493 60.6646 37.7776L60.6394 37.866C60.229 39.2425 59.8754 40.7137 60.0711 42.2164C60.3363 44.2117 61.0246 46.4848 62.2305 47.3751C63.4681 48.2843 65.6276 48.6 67.7302 48.2338C70.6536 47.7287 74.6441 46.3269 76.3426 43.334C77.6433 41.042 77.959 37.102 78.3126 34.5006C78.3631 34.1091 78.4263 33.7176 78.4894 33.3325L78.5399 32.9915C78.5526 32.8968 78.6094 32.8589 78.7799 32.9031C78.8051 32.9473 78.8304 32.9915 78.862 33.0357C78.9314 33.143 79.0072 33.2693 79.064 33.4019C79.5881 34.5574 80.1122 35.7192 80.6362 36.8747C81.1666 38.0428 81.6907 39.2046 82.2211 40.3727C83.0798 42.2669 83.9448 43.896 85.8391 44.6663C87.184 45.2156 88.7499 45.1588 90.019 44.5211V44.5085Z" fill="#424242"/>
                        <path d="M36.9813 25.8304C35.5291 23.6583 34.0705 21.5178 32.17 19.7057C31.5196 19.0869 30.5409 18.1524 29.9032 18.7649C29.4107 19.2448 28.1352 21.4231 27.8511 22.1051C27.5038 22.9322 27.3207 23.5952 27.8069 24.3781C28.2868 25.1548 33.6412 28.8422 34.5883 31.3363C34.5125 31.4879 34.4367 31.6331 34.3294 31.7846C32.271 34.727 28.7414 37.7199 25.919 39.9109C21.7201 43.1753 13.5433 45.7199 11.0176 46.2061C7.45648 47.229 5.89689 46.8059 6.86295 47.4121C7.82901 48.0182 16.6183 51.3837 22.9008 48.6875C28.8424 46.1366 31.728 42.847 35.1502 37.2716C35.9963 35.8951 36.2994 34.3734 36.4068 32.8328C36.9498 33.3063 37.5054 33.742 38.0926 34.1208C38.7367 34.5376 39.3744 34.828 40.0311 35.0174C41.2813 35.3774 42.5125 35.5541 43.788 35.5541C48.5425 35.5541 53.316 34.5186 58.3736 32.3845C58.7966 32.2077 59.226 32.0182 59.6554 31.8225C61.0761 31.1785 62.1621 30.5155 62.8756 29.3474C64.0942 27.3521 64.6688 23.4184 64.1068 20.9243C63.5007 18.2471 61.4486 15.4878 58.0074 12.7286C57.4581 12.2866 56.3594 11.7246 55.6017 11.9835C55.3997 12.053 55.2923 12.2234 55.1787 12.4002C55.1408 12.4634 55.1029 12.5202 55.0587 12.577C54.0042 14.0167 53.4107 15.892 53.4865 17.5905C53.537 18.7586 54.0989 19.6299 55.0713 20.0403C55.3618 20.1603 55.6838 20.2487 56.0311 20.2929C56.4731 20.356 56.9277 20.3939 57.3633 20.4318C57.5528 20.4508 57.7359 20.4634 57.9253 20.4823H57.9442L57.9569 20.495C58.5315 20.9622 60.451 22.6418 61.0003 24.5486L61.0129 24.5991L60.9687 24.6244C60.8361 24.7128 60.7161 24.7949 60.5962 24.8833C60.3436 25.0601 60.1037 25.2242 59.8511 25.3631C55.2292 27.8509 48.7888 29.0822 42.1968 28.7475C40.9845 28.6844 40.0058 28.4634 39.1913 28.0593C38.5914 27.7625 38.0358 27.4279 37.5117 27.068C37.3981 26.626 37.2402 26.1966 36.9877 25.8178L36.9813 25.8304Z" fill="#424242"/>
                        <path d="M54.9381 45.4365C54.9381 45.4365 51.4085 42.0332 50.6003 42.0332C49.7921 42.0332 48.1693 43.8138 47.2285 45.0324C46.2751 44.1421 43.9578 42.0332 43.3201 42.0332C42.1393 42.0332 39.2285 45.8091 39.2285 46.1184C39.2285 46.7246 42.695 49.8375 43.137 49.8375C43.6926 49.8375 44.8102 48.783 45.7384 47.7285C46.0036 47.4634 46.3824 47.0277 46.7613 46.5731C47.5442 47.6275 50.0446 49.8375 50.4171 49.8375C50.9728 49.8375 52.0904 48.783 53.0186 47.7285C53.5174 47.2297 54.3824 46.1816 54.9381 45.4302V45.4365Z" fill="#424242"/>
                        <path d="M3.90845 12.4453C4.46409 12.4453 5.58169 11.3909 6.50987 10.3364C6.77506 10.0712 7.15391 9.63555 7.52644 9.18094C8.30939 10.2354 10.8098 12.4453 11.1823 12.4453C11.738 12.4453 12.8556 11.3909 13.7837 10.3364C14.2826 9.83761 15.1476 8.78946 15.7032 8.03808C15.7032 8.03808 12.1736 4.63477 11.3654 4.63477C10.5572 4.63477 8.93449 6.41535 7.99369 7.63398C7.04025 6.74368 4.72297 4.63477 4.08524 4.63477C2.91081 4.63477 0 8.41693 0 8.72632C0 9.32616 3.46646 12.4453 3.90845 12.4453Z" fill="#424242"/>
                        <path d="M43.453 1.10497C43.2068 1.8311 42.7774 2.53197 42.4301 3.16338C41.805 4.29361 40.9274 4.33781 39.8603 4.88082C38.0292 5.81531 36.1349 6.63615 34.2596 7.48856C32.6874 8.20205 31.0963 8.87766 29.524 9.59747C27.7245 10.4246 25.9439 11.2897 24.1381 12.1105C23.7592 12.281 23.3299 12.3315 22.9258 12.4388C22.9574 12.0284 22.9258 11.6054 23.0331 11.2139C23.191 10.6519 23.4625 10.1279 23.6519 9.57222C24.1255 8.18942 25.4767 8.07577 26.5375 7.57695C28.6338 6.59826 30.7679 5.70166 32.8832 4.76085C34.8974 3.85793 36.9116 2.9487 38.9195 2.01421C40.1381 1.44594 41.3315 0.820837 42.5501 0.258879C42.8847 0.101026 43.2825 0.0820837 43.6551 0C43.6551 0.372534 43.573 0.738753 43.453 1.10497Z" fill="#424242"/>
                        <path d="M70.3954 3.59996C70.4522 3.54944 70.5469 3.56207 70.5911 3.63153C71.1341 4.50288 71.5003 5.61416 72.2012 5.8983C73.4451 6.40343 74.3985 5.39948 75.112 4.35765C75.4656 3.83989 75.8508 3.34739 76.1917 2.89909C76.2359 2.84226 76.3117 2.82963 76.3685 2.86752C76.9052 3.24637 77.7513 4.18717 78.4017 3.81464C78.6037 3.70098 78.749 3.50524 78.8816 3.31582C79.5951 2.29925 80.1444 1.15639 80.8958 0.165071C80.9715 0.0640452 81.1294 0.114558 81.1294 0.240841C81.1294 0.777542 81.2746 1.56049 81.2494 1.86989C81.0599 4.02932 79.7592 6.79491 78.0039 8.11456C77.6629 8.37344 77.2778 8.60075 76.8547 8.66389C75.9897 8.79017 75.5288 8.07036 74.6069 8.39238C73.0599 8.9354 72.3591 10.9117 70.0481 10.476C69.6693 10.4066 69.2967 10.2614 69.0189 9.99617C67.4846 8.51866 69.0378 4.7807 70.3954 3.59996Z" fill="#424242"/>
                        <path d="M83.0175 46.73C82.7712 47.4561 82.3419 48.157 81.9946 48.7884C81.3695 49.9186 80.4918 49.9628 79.4247 50.5058C77.5936 51.4403 75.6994 52.2611 73.8241 53.1136C72.2519 53.8271 70.6607 54.5027 69.0885 55.2225C67.289 56.0496 65.5084 56.9147 63.7025 57.7355C63.3237 57.906 62.8943 57.9565 62.4902 58.0638C62.5218 57.6534 62.4902 57.2304 62.5976 56.8389C62.7554 56.2769 63.0269 55.7529 63.2164 55.1972C63.6899 53.8144 65.0411 53.7008 66.1019 53.202C68.1982 52.2233 70.3324 51.3267 72.4476 50.3859C74.4618 49.4829 76.476 48.5737 78.4839 47.6392C79.7025 47.0709 80.8959 46.4458 82.1145 45.8839C82.4492 45.726 82.847 45.7071 83.2195 45.625C83.2195 45.9975 83.1374 46.3638 83.0175 46.73Z" fill="#424242"/>
                      </svg>
                    </Link>
                  </div>

                    <div className="flex flex-col items-center border-l border-[#424242] pl-6">
                      <p className="text-[#424242] text-[14px] uppercase mb-2">Managed by</p> 
                      <div className="h-2"></div>
                      <svg width="101" height="50" viewBox="0 0 101 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_3301_1181)">
                          <path d="M86.9369 16.5846L70.3523 0L67.0369 3.31538L80.3061 16.5846L76.9907 19.9L70.3523 13.2692L60.3984 23.2231L63.7215 26.5385L70.3523 19.9L73.6677 23.2231L67.0369 29.8538L70.3523 33.1692L86.9369 16.5846Z" fill="#424242"/>
                          <path d="M83.622 0L80.3066 3.31538L93.5759 16.5846L80.3066 29.8538L83.622 33.1692L100.207 16.5846L83.622 0Z" fill="#424242"/>
                          <path d="M50.448 19.9004L40.4941 29.8542L43.8095 33.1696L50.448 26.5389L57.0788 33.1696L60.3941 29.8542L50.448 19.9004Z" fill="#424242"/>
                          <path d="M57.0804 0L53.765 3.31538L60.3958 9.95385L57.0804 13.2692L50.4496 6.63077L27.2266 29.8538L30.5419 33.1692L50.4496 13.2692L57.0804 19.9L67.0343 9.95385L57.0804 0Z" fill="#424242"/>
                          <path d="M43.8073 0L37.1765 6.63077L30.538 0L27.2227 3.31538L37.1765 13.2692L47.1227 3.31538L43.8073 0Z" fill="#424242"/>
                          <path d="M17.2702 0L0.685547 16.5846L17.2702 33.1692L33.8548 16.5846L17.2702 0ZM17.2702 26.5385L7.31632 16.5846L17.2702 6.63077L27.224 16.5846L17.2702 26.5385Z" fill="#424242"/>
                          <path d="M50.448 19.9004L40.4941 29.8542L43.8095 33.1696L50.448 26.5389L57.0788 33.1696L60.3941 29.8542L50.448 19.9004Z" fill="#424242"/>
                          <path d="M27.0567 43.875H26.3336C26.2336 43.875 26.1567 43.9519 26.1567 44.0519V46.4058H23.3875V44.0519C23.3875 43.9519 23.3105 43.875 23.2105 43.875H22.4875C22.3875 43.875 22.3105 43.9519 22.3105 44.0519V49.7365C22.3105 49.8365 22.3875 49.9135 22.4875 49.9135H23.2105C23.3105 49.9135 23.3875 49.8365 23.3875 49.7365V47.3596H26.1567V49.7365C26.1567 49.8365 26.2336 49.9135 26.3336 49.9135H27.0567C27.1567 49.9135 27.2336 49.8365 27.2336 49.7365V44.0519C27.2336 43.9519 27.1567 43.875 27.0567 43.875Z" fill="#424242"/>
                          <path d="M42.5749 43.8748H38.4211C38.3211 43.8748 38.2441 43.9517 38.2441 44.0517V49.7363C38.2441 49.8363 38.3211 49.9132 38.4211 49.9132H42.5749C42.6749 49.9132 42.7518 49.8363 42.7518 49.7363V49.1286C42.7518 49.0286 42.6749 48.9517 42.5749 48.9517H39.3211V47.3517H42.1057C42.2057 47.3517 42.2826 47.2748 42.2826 47.1748V46.5671C42.2826 46.4671 42.2057 46.3901 42.1057 46.3901H39.3211V44.8209H42.5749C42.6749 44.8209 42.7518 44.744 42.7518 44.644V44.0363C42.7518 43.9363 42.6749 43.8594 42.5749 43.8594V43.8748Z" fill="#424242"/>
                          <path d="M55.1511 43.8748H50.9972C50.8972 43.8748 50.8203 43.9517 50.8203 44.0517V49.7363C50.8203 49.8363 50.8972 49.9132 50.9972 49.9132H55.1511C55.2511 49.9132 55.328 49.8363 55.328 49.7363V49.1286C55.328 49.0286 55.2511 48.9517 55.1511 48.9517H51.8972V47.3517H54.6819C54.7819 47.3517 54.8588 47.2748 54.8588 47.1748V46.5671C54.8588 46.4671 54.7819 46.3901 54.6819 46.3901H51.8972V44.8209H55.1511C55.2511 44.8209 55.328 44.744 55.328 44.644V44.0363C55.328 43.9363 55.2511 43.8594 55.1511 43.8594V43.8748Z" fill="#424242"/>
                          <path d="M59.9555 48.9596H57.6863V44.0519C57.6863 43.9519 57.6094 43.875 57.5094 43.875H56.7863C56.6863 43.875 56.6094 43.9519 56.6094 44.0519V49.8058C56.6094 49.8673 56.6555 49.9135 56.7171 49.9135H59.9555C60.0555 49.9135 60.1325 49.8365 60.1325 49.7365V49.1288C60.1325 49.0288 60.0555 48.9519 59.9555 48.9519V48.9596Z" fill="#424242"/>
                          <path d="M63.9878 43.791C62.2648 43.791 60.834 45.1295 60.834 46.9064C60.834 48.6833 62.2724 49.9987 63.9878 49.9987C65.7032 49.9987 67.134 48.6756 67.134 46.9064C67.134 45.1372 65.6955 43.791 63.9878 43.791ZM63.9878 48.9756C62.8417 48.9756 61.9263 48.0295 61.9263 46.8987C61.9263 45.7679 62.8417 44.8064 63.9878 44.8064C65.134 44.8064 66.0417 45.7679 66.0417 46.8987C66.0417 48.0295 65.1186 48.9756 63.9878 48.9756Z" fill="#424242"/>
                          <path d="M70.9623 43.8749H68.4777C68.3777 43.8749 68.3008 43.9518 68.3008 44.0518V49.7364C68.3008 49.8364 68.3777 49.9133 68.4777 49.9133H69.2008C69.3008 49.9133 69.3777 49.8364 69.3777 49.7364V48.0056H70.9623C72.1085 48.0056 73.0392 47.1518 73.0392 45.9364C73.0392 44.721 72.1085 43.8672 70.9623 43.8672V43.8749ZM70.7315 47.0595H69.3777V44.821H70.7315C71.3777 44.821 71.9392 45.1749 71.9392 45.9364C71.9392 46.698 71.3777 47.0518 70.7315 47.0518V47.0595Z" fill="#424242"/>
                          <path d="M88.6198 43.8748H84.466C84.366 43.8748 84.2891 43.9517 84.2891 44.0517V49.7363C84.2891 49.8363 84.366 49.9132 84.466 49.9132H88.6198C88.7198 49.9132 88.7968 49.8363 88.7968 49.7363V49.1286C88.7968 49.0286 88.7198 48.9517 88.6198 48.9517H85.366V47.3517H88.1506C88.2506 47.3517 88.3275 47.2748 88.3275 47.1748V46.5671C88.3275 46.4671 88.2506 46.3901 88.1506 46.3901H85.366V44.8209H88.6198C88.7198 44.8209 88.7968 44.744 88.7968 44.644V44.0363C88.7968 43.9363 88.7198 43.8594 88.6198 43.8594V43.8748Z" fill="#424242"/>
                          <path d="M100.034 43.875H95.7648C95.6648 43.875 95.5879 43.9519 95.5879 44.0519V44.6596C95.5879 44.7596 95.6648 44.8365 95.7648 44.8365H97.3648V49.7442C97.3648 49.8442 97.4417 49.9212 97.5417 49.9212H98.2648C98.3648 49.9212 98.4417 49.8442 98.4417 49.7442V44.8365H100.042C100.142 44.8365 100.219 44.7596 100.219 44.6596V44.0519C100.219 43.9519 100.142 43.875 100.042 43.875H100.034Z" fill="#424242"/>
                          <path d="M80.5947 43.798C79.7332 43.7288 78.9562 44.1134 78.4793 44.7288C78.0639 44.1903 77.4332 43.8288 76.7024 43.7903C75.3409 43.7211 74.2024 44.7903 74.1562 46.1288V49.7364C74.1562 49.8364 74.2332 49.9134 74.3332 49.9134H75.0101C75.1101 49.9134 75.187 49.8364 75.187 49.7364V46.2672C75.187 45.5441 75.7178 44.8903 76.4409 44.8211C77.2716 44.7364 77.9716 45.3903 77.9716 46.2057V49.7364C77.9716 49.8364 78.0486 49.9134 78.1486 49.9134H78.8255C78.9255 49.9134 79.0024 49.8364 79.0024 49.7364V46.2672C79.0024 45.5441 79.5332 44.8903 80.2486 44.8211C81.0793 44.7364 81.7793 45.3903 81.7793 46.2057V49.7364C81.7793 49.8364 81.8639 49.9134 81.9562 49.9134H82.6332C82.7332 49.9134 82.8101 49.8364 82.8101 49.7364V46.2903C82.8101 45.0134 81.8639 43.898 80.5947 43.7903V43.798Z" fill="#424242"/>
                          <path d="M92.6432 43.7992C91.1971 43.6838 89.9817 44.8069 89.9355 46.2146V49.7376C89.9355 49.8376 90.0125 49.9146 90.1125 49.9146H90.8279C90.9279 49.9146 91.0048 49.8376 91.0048 49.7376V46.2915C91.0048 45.4376 91.7509 44.753 92.6279 44.8684C93.3509 44.9607 93.874 45.6146 93.874 46.3453V49.7376C93.874 49.8376 93.9509 49.9146 94.0509 49.9146H94.7663C94.8663 49.9146 94.9432 49.8376 94.9432 49.7376V48.5915V46.3761C94.9432 45.053 93.9586 43.8915 92.6355 43.7915L92.6432 43.7992Z" fill="#424242"/>
                          <path d="M48.7202 43.875C48.6433 43.875 48.574 43.9288 48.551 44.0058C48.351 44.7596 47.3433 48.5365 47.3433 48.5442C47.2817 48.7673 47.0894 48.9288 46.874 48.9673C46.874 48.9673 46.8125 48.975 46.7817 48.975C46.751 48.975 46.6894 48.975 46.6894 48.9673C46.474 48.9288 46.2817 48.7673 46.2202 48.5442C46.2202 48.5442 45.2125 44.7596 45.0125 44.0058C44.9894 43.9288 44.9202 43.875 44.8433 43.875H44.1202C44.0048 43.875 43.9202 43.9827 43.9433 44.0981L45.2048 48.875C45.3971 49.4673 45.9048 49.8904 46.5356 49.975C46.6202 49.9904 46.6971 49.9904 46.7663 49.9904C46.8356 49.9904 46.9125 49.9904 46.9971 49.975C47.6279 49.8904 48.1356 49.4673 48.3279 48.875L49.5894 44.0981C49.6202 43.9827 49.5356 43.875 49.4125 43.875H48.6894H48.7202Z" fill="#424242"/>
                          <path d="M18.4786 43.7969C16.8478 43.7969 16.1094 45.143 16.1094 46.3815V49.743C16.1094 49.843 16.1863 49.92 16.2863 49.92H17.0094C17.1094 49.92 17.1863 49.843 17.1863 49.743V47.9892H19.7709V49.743C19.7709 49.843 19.8478 49.92 19.9478 49.92H20.6709C20.7709 49.92 20.8478 49.843 20.8478 49.743V46.3815C20.8478 45.1507 20.1171 43.7969 18.4863 43.7969H18.4786ZM19.7632 47.0276H17.1786V46.3969C17.1786 45.4123 17.7017 44.82 18.4709 44.82C19.2401 44.82 19.7555 45.4123 19.7555 46.3969V47.0276H19.7632Z" fill="#424242"/>
                          <path d="M8.34934 43.875H7.63395C7.53624 43.875 7.45703 43.9542 7.45703 44.0519V49.7365C7.45703 49.8343 7.53624 49.9135 7.63395 49.9135H8.34934C8.44705 49.9135 8.52626 49.8343 8.52626 49.7365V44.0519C8.52626 43.9542 8.44705 43.875 8.34934 43.875Z" fill="#424242"/>
                          <path d="M5.21827 44.7617C4.65673 44.2001 3.94135 43.8848 3.07981 43.8848H0.864423C0.764423 43.8848 0.6875 43.9617 0.6875 44.0617V49.7463C0.6875 49.8463 0.764423 49.9232 0.864423 49.9232H3.00288C4.6875 49.9232 6.0875 48.6386 6.0875 46.9002C6.0875 46.0694 5.75673 45.3155 5.21827 44.7617ZM2.93365 48.9463H1.76442V44.8232H2.65673C3.15673 44.8232 3.82596 44.8925 4.32596 45.354C4.73365 45.7463 4.9875 46.2386 4.9875 46.9002C4.9875 48.0386 4.07981 48.9463 2.92596 48.9463H2.93365Z" fill="#424242"/>
                          <path d="M36.2241 44.7617C35.6626 44.2001 34.9472 43.8848 34.0857 43.8848H31.8703C31.7703 43.8848 31.6934 43.9617 31.6934 44.0617V49.7463C31.6934 49.8463 31.7703 49.9232 31.8703 49.9232H34.0087C35.6934 49.9232 37.0934 48.6386 37.0934 46.9002C37.0934 46.0694 36.7626 45.3155 36.2241 44.7617ZM33.9318 48.9463H32.7626V44.8232H33.6549C34.1549 44.8232 34.8241 44.8925 35.3241 45.354C35.7318 45.7463 35.9857 46.2386 35.9857 46.9002C35.9857 48.0386 35.078 48.9463 33.9241 48.9463H33.9318Z" fill="#424242"/>
                          <path d="M13.4026 47.6848C14.2333 47.4925 14.8718 46.754 14.8718 45.8155C14.8718 44.7386 14.0102 43.8848 12.9718 43.8848H10.2179C10.1179 43.8848 10.041 43.9617 10.041 44.0617V49.7463C10.041 49.8463 10.1179 49.9232 10.2179 49.9232H10.941C11.041 49.9232 11.1179 49.8463 11.1179 49.7463V47.7386H12.1795L13.4564 49.8386C13.4872 49.8848 13.541 49.9155 13.5949 49.9155H14.4641C14.5949 49.9155 14.6718 49.7694 14.6026 49.6617L13.3872 47.6771L13.4026 47.6848ZM11.1256 46.7925V44.8232H12.4795H12.7564C13.1872 44.8232 13.7795 45.1848 13.7795 45.8155C13.7795 46.4463 13.2026 46.7925 12.7179 46.7925H11.1333H11.1256Z" fill="#424242"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_3301_1181">
                            <rect width="99.5154" height="50" fill="white" transform="translate(0.691406)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                </div>

                <div className="flex pt-1 lg:flex-row items-center gap-8 mt-[20px] lg:mt-0 xl:mt-0">
                    <Link className="flex items-center gap-2 text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                        <span>
                            Events
                        </span>
                        <svg className="" fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.11455 0.412109H13.4675M13.4675 0.412109V12.7651M13.4675 0.412109L0.291016 13.5886" stroke="#424242" strokeMiterlimit="10" strokeWidth="2">
                            </path>
                        </svg>
                    </Link>
                    <Link className="flex items-center gap-2 text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                        <span>
                            Places to visit
                        </span>
                        <svg className="" fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.11455 0.412109H13.4675M13.4675 0.412109V12.7651M13.4675 0.412109L0.291016 13.5886" stroke="#424242" strokeMiterlimit="10" strokeWidth="2">
                            </path>
                        </svg>
                    </Link>
                    <Link className="flex items-center gap-2 text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                        <span>
                            Contact us
                        </span>
                        <svg className="" fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.11455 0.412109H13.4675M13.4675 0.412109V12.7651M13.4675 0.412109L0.291016 13.5886" stroke="#424242" strokeMiterlimit="10" strokeWidth="2">
                            </path>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="mt-8 lg:mt-16">
                <div className="mb-4 lg:mb-8 xl:mb-8 grid grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-8 xl:gap-8 border-b border-black/50 pb-3">
                    <h4 className="text-[14px] font-medium uppercase tracking-wide text-[#424242] opacity-60">
                        Info
                    </h4>
                    <h4 className="text-[14px] font-medium uppercase tracking-wide text-[#424242] opacity-60">
                        Our Centers
                    </h4>
                    <div className="lg:block xl:block"></div>
                </div>
                <div className="mb-8 lg:mb-12 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    <div className="flex flex-col gap-2">
                        <Link className="text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                            Discover Al Dirah
                        </Link>
                        <Link className="text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                            Media Center
                        </Link>
                        <Link className="text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                            Location
                        </Link>
                        <Link className="text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                            Newsletter
                        </Link>
                        <Link className="text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                            FAQs
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link className="text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                            Ushaiqer
                        </Link>
                        <Link className="text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                            Alqaisareyah
                        </Link>
                        <Link className="text-[16px] lg:text-[20px] xl:text-[20px] text-[#424242]" href="#">
                            Al-Moaiqliah
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                    </div>
                </div>
            </div>
          </div>

          {/* Newsletter LG */}
          <div className="hidden lg:flex w-full lg:max-w-[360px] bg-[#e9e4d9] p-6 max-h-[353px] flex-col justify-between">
              <div className="mb-8">
                  <h3 className="text-[32px] font-normal text-[#424242] leading-[38.4px]">Subscribe to our newsletter</h3>
              </div>
              <div className="relative">
                  <div className="flex items-center justify-between border-b border-[#424242] pb-2">
                      <input className="w-full bg-transparent text-sm text-[#424242] outline-none placeholder:text-[#424242]" placeholder="your@email.ru" type="email"></input>
                      <button className="ml-2"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M8 11L13 6M13 6L8 1M13 6L1 6" stroke="#424242" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                  </div>
              </div>
          </div>
        </div>

        {/* Social sites */}
        <div className="hidden- lg:block mt-0 xl:mt-12 lg:mt-12">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="flex flex-col gap-4">
                  <div className="flex gap-4 justify-start">
                      <Link className="flex h-10 w-10 items-center justify-center rounded-full border border-[#424242]" href="#">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.8333 0.5C14.2754 0.5 14.6993 0.675595 15.0118 0.988155C15.3244 1.30072 15.5 1.72464 15.5 2.16667V13.8333C15.5 14.2754 15.3244 14.6993 15.0118 15.0118C14.6993 15.3244 14.2754 15.5 13.8333 15.5H2.16667C1.72464 15.5 1.30072 15.3244 0.988155 15.0118C0.675595 14.6993 0.5 14.2754 0.5 13.8333V2.16667C0.5 1.72464 0.675595 1.30072 0.988155 0.988155C1.30072 0.675595 1.72464 0.5 2.16667 0.5H13.8333ZM13.4167 13.4167V9C13.4167 8.2795 13.1304 7.5885 12.621 7.07903C12.1115 6.56955 11.4205 6.28333 10.7 6.28333C9.99167 6.28333 9.16667 6.71667 8.76667 7.36667V6.44167H6.44167V13.4167H8.76667V9.30833C8.76667 8.66667 9.28333 8.14167 9.925 8.14167C10.2344 8.14167 10.5312 8.26458 10.75 8.48338C10.9688 8.70217 11.0917 8.99891 11.0917 9.30833V13.4167H13.4167ZM3.73333 5.13333C4.10464 5.13333 4.46073 4.98583 4.72328 4.72328C4.98583 4.46073 5.13333 4.10464 5.13333 3.73333C5.13333 2.95833 4.50833 2.325 3.73333 2.325C3.35982 2.325 3.00161 2.47338 2.73749 2.73749C2.47338 3.00161 2.325 3.35982 2.325 3.73333C2.325 4.50833 2.95833 5.13333 3.73333 5.13333ZM4.89167 13.4167V6.44167H2.58333V13.4167H4.89167Z" fill="#424242">
                              </path>
                          </svg>
                      </Link>
                      <Link className="flex h-10 w-10 items-center justify-center rounded-full border border-[#424242]" href="#">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_5001_8441)">
                                  <path d="M13.7203 13.1725C12.1341 10.9096 10.548 8.6466 8.96315 6.38222C8.73123 6.64572 8.50085 6.90757 8.27031 7.17108C9.82092 9.38527 11.3731 11.5995 12.9237 13.8122C12.9522 13.8532 12.9806 13.8928 13.0091 13.9341H11.0061L7.19779 8.39551C6.96586 8.65902 6.73409 8.92401 6.50356 9.18735C7.41827 10.5153 8.33158 11.8447 9.2449 13.1727C9.66465 13.7819 10.0829 14.391 10.5025 15.0002H15.0008C14.5725 14.391 14.1458 13.7819 13.7205 13.1727L13.7203 13.1725ZM2.15591 1.06594H3.99245L5.54027 3.274C6.24162 4.27452 6.94297 5.27653 7.64431 6.27705C7.87485 6.01355 8.10523 5.7517 8.33576 5.4882C7.05405 3.6594 5.7722 1.83045 4.49049 0H0.185547C1.39763 1.76337 2.60971 3.52542 3.82179 5.28879C4.5103 6.28782 5.19741 7.28668 5.88452 8.28571C6.1149 8.0222 6.34544 7.75887 6.57736 7.49536L2.15591 1.06594Z" fill="#424242">
                                  </path>
                                  <path d="M7.19698 8.39608C6.96505 8.65958 6.73328 8.92458 6.50275 9.18792C5.33755 10.5159 4.1725 11.8453 3.00746 13.1733C2.47398 13.7824 1.94051 14.3916 1.40564 15.0007H0C0.533476 14.3916 1.06695 13.7824 1.60182 13.1733C2.34293 12.3266 3.08559 11.4798 3.82686 10.6331C4.51258 9.8504 5.1983 9.06917 5.88402 8.28644C6.1144 8.02294 6.34493 7.7596 6.57686 7.49609L7.19714 8.39608H7.19698Z" fill="#424242">
                                  </path>
                                  <path d="M14.5566 0C12.6916 2.12741 10.8264 4.25481 8.96142 6.38222C8.72949 6.64572 8.49911 6.90757 8.26858 7.17108C8.06079 6.87412 7.85176 6.57567 7.64258 6.27722C7.87311 6.01371 8.10349 5.75187 8.33402 5.48836C9.93724 3.65941 11.5406 1.82896 13.1438 0H14.5564H14.5566Z" fill="#424242">
                                  </path>
                              </g>
                              <defs>
                                  <clippath id="clip0_5001_8441">
                                      <rect fill="white" height="15" width="15">
                                      </rect>
                                  </clippath>
                              </defs>
                          </svg>
                      </Link>
                      <Link className="flex h-10 w-10 items-center justify-center rounded-full border border-[#424242]" href="#">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path clipRule="evenodd" d="M2.5 10C2.5 7.00405 2.5 5.50608 3.21391 4.42713C3.53271 3.94532 3.94532 3.53271 4.42713 3.21391C5.50608 2.5 7.00405 2.5 10 2.5C12.9959 2.5 14.4939 2.5 15.5729 3.21391C16.0547 3.53271 16.4673 3.94532 16.7861 4.42713C17.5 5.50608 17.5 7.00405 17.5 10C17.5 12.9959 17.5 14.4939 16.7861 15.5729C16.4673 16.0547 16.0547 16.4673 15.5729 16.7861C14.4939 17.5 12.9959 17.5 10 17.5C7.00405 17.5 5.50608 17.5 4.42713 16.7861C3.94532 16.4673 3.53271 16.0547 3.21391 15.5729C2.5 14.4939 2.5 12.9959 2.5 10ZM13.8832 10.0001C13.8832 12.1445 12.1448 13.883 10.0004 13.883C7.85592 13.883 6.11751 12.1445 6.11751 10.0001C6.11751 7.85568 7.85592 6.11727 10.0004 6.11727C12.1448 6.11727 13.8832 7.85568 13.8832 10.0001ZM10.0004 12.5693C11.4193 12.5693 12.5695 11.419 12.5695 10.0001C12.5695 8.5812 11.4193 7.43094 10.0004 7.43094C8.58144 7.43094 7.43118 8.5812 7.43118 10.0001C7.43118 11.419 8.58144 12.5693 10.0004 12.5693ZM14.0367 6.8348C14.5406 6.8348 14.9491 6.42632 14.9491 5.92244C14.9491 5.41857 14.5406 5.01009 14.0367 5.01009C13.5328 5.01009 13.1243 5.41857 13.1243 5.92244C13.1243 6.42632 13.5328 6.8348 14.0367 6.8348Z" fill="#424242" fillRule="evenodd">
                              </path>
                          </svg>
                      </Link>
                      <Link className="flex h-10 w-10 items-center justify-center rounded-full border border-[#424242]" href="#">
                          <svg fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path clipRule="evenodd" d="M12.25 0H1.75C0.784875 0 0 0.784875 0 1.75V12.25C0 13.2151 0.784875 14 1.75 14H7V9.1875H5.25V7H7V5.25C7 4.55381 7.27656 3.88613 7.76884 3.39384C8.26113 2.90156 8.92881 2.625 9.625 2.625H11.375V4.8125H10.5C10.017 4.8125 9.625 4.767 9.625 5.25V7H11.8125L10.9375 9.1875H9.625V14H12.25C13.2151 14 14 13.2151 14 12.25V1.75C14 0.784875 13.2151 0 12.25 0Z" fill="#424242" fillRule="evenodd">
                              </path>
                          </svg>
                      </Link>
                  </div>
                  <div className="flex flex-col gap-4 mt-[10px] lg:mt-[80px] xl:mt-[80px]">
                      <div className="border-b border-black/50 pb-1">
                          <h4 className="text-sm font-medium uppercase tracking-wide text-[#424242] text-left">
                              Address
                          </h4>
                      </div>
                      <p className="text-base text-[#424242] text-left text-[16px]">
                          King Khalid Road, AlNkheel, Riyadh 12214
                      </p>
                  </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16 mt-[10px] lg:mt-[70px] xl:mt-[70px] xl:text-left">
                  <div className="flex flex-col gap-4">
                      <Link className="text-[#424242] lg:text-center xl:lg:text-left lg:text-left mt-0 lg:mt-16 xl:mt-16 text-[14px]" href="#">
                          Privacy
                      </Link>
                      <p className="text-[#424242] lg:text-left xl:text-left text-[14px]">
                          Copyright © 2025 Al Dirah. All rights reserved.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      </div>

      {/* Footer bg */}
      <div className="custom-container p-0">
        <Image src="/images/footer_bg.svg" width={705} height={321} alt="DIRHA" loading="lazy" quality={100} className="lg:absolute xl:lg:absolute -right-[0px] bottom-[0px]" />
      </div>

    </div>
  );
}
