import React from "react";
import Image from "next/image";

export default function InterviewPartners() {
  return (
    <div className="w-full flex justify-center mt-16">
      <div className=" w-[65%] mb-20">
        {/* title for partner */}
        <div className="flex justify-center">
          <h1 className="text-4xl text-center h-10 leading-10 text-text-header-1 font-medium font-DmSans mb-5">
            Current Interview Partners
          </h1>
        </div>
        {/* partners Photo */}
        <div className=" mt-5 mx-5 flex flex-col">
          {/* the TOP 4 partner */}
          <div className="flex justify-between gap-5">
            <div className="w-48 h-24  ">
              <svg
                className="w-full h-full flex-shrink-0"
                viewBox="0 0 250 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Google">
                  <path
                    id="Vector"
                    d="M113.106 33.0408C113.106 40.545 107.236 46.0729 100.032 46.0729C92.8269 46.0729 86.9568 40.545 86.9568 33.0408C86.9568 25.4835 92.8269 20.0059 100.032 20.0059C107.236 20.0059 113.106 25.4835 113.106 33.0408ZM107.383 33.0408C107.383 28.3494 103.981 25.1413 100.032 25.1413C96.0839 25.1413 92.6816 28.3494 92.6816 33.0408C92.6816 37.6818 96.0839 40.9388 100.032 40.9388C103.981 40.9388 107.383 37.6763 107.383 33.0408Z"
                    fill="#EA4335"
                  />
                  <path
                    id="Vector_2"
                    d="M141.312 33.0408C141.312 40.545 135.441 46.0729 128.238 46.0729C121.035 46.0729 115.162 40.545 115.162 33.0408C115.162 25.4891 121.035 20.0059 128.238 20.0059C135.441 20.0059 141.312 25.4835 141.312 33.0408ZM135.589 33.0408C135.589 28.3494 132.187 25.1413 128.238 25.1413C124.289 25.1413 120.886 28.3494 120.886 33.0408C120.886 37.6818 124.289 40.9388 128.238 40.9388C132.187 40.9388 135.589 37.6763 135.589 33.0408Z"
                    fill="#FBBC05"
                  />
                  <path
                    id="Vector_3"
                    d="M168.345 20.7936V44.1944C168.345 53.8187 162.668 57.7503 155.957 57.7503C149.64 57.7503 145.837 53.5254 144.404 50.0687L149.387 47.9947C150.275 50.1162 152.447 52.6204 155.95 52.6204C160.246 52.6204 162.909 49.9709 162.909 44.9793V43.1064H162.707C161.426 44.6874 158.959 46.0687 155.845 46.0687C149.328 46.0687 143.359 40.3913 143.359 33.0883C143.359 25.7307 149.328 20.0059 155.845 20.0059C158.952 20.0059 161.422 21.3871 162.707 22.9221H162.909V20.7992H168.345V20.7936ZM163.314 33.0883C163.314 28.4975 160.251 25.1413 156.356 25.1413C152.408 25.1413 149.099 28.4975 149.099 33.0883C149.099 37.6288 152.408 40.9388 156.356 40.9388C160.251 40.9388 163.314 37.6288 163.314 33.0883Z"
                    fill="#4285F4"
                  />
                  <path
                    id="Vector_4"
                    d="M177.304 7.07812V45.2751H171.723V7.07812H177.304Z"
                    fill="#34A853"
                  />
                  <path
                    id="Vector_5"
                    d="M199.059 37.3296L203.501 40.2919C202.067 42.4134 198.612 46.0684 192.642 46.0684C185.237 46.0684 179.709 40.3436 179.709 33.0349C179.709 25.2821 185.285 20 192.001 20C198.765 20 202.074 25.3827 203.156 28.2933L203.749 29.7723L186.325 36.9902C187.659 39.6034 189.733 40.9385 192.642 40.9385C195.556 40.9385 197.578 39.5042 199.059 37.3296ZM185.384 32.6411L197.032 27.8045C196.391 26.1774 194.462 25.0433 192.196 25.0433C189.288 25.0433 185.237 27.6089 185.384 32.6411Z"
                    fill="#EA4335"
                  />
                  <path
                    id="Vector_6"
                    d="M65.8268 29.6495V24.1202H84.4609C84.6425 25.0839 84.736 26.2236 84.736 27.4582C84.736 31.6063 83.602 36.7375 79.9469 40.3912C76.3925 44.0937 71.8492 46.0685 65.831 46.0685C54.6788 46.0685 45.3003 36.982 45.3003 25.8297C45.3003 14.6761 54.6788 5.59229 65.831 5.59229C72.0028 5.59229 76.3981 8.01268 79.6997 11.1677L75.7989 15.0699C73.4302 12.8493 70.2207 11.1202 65.8268 11.1202C57.6816 11.1202 51.3129 17.6859 51.3129 25.8297C51.3129 33.9736 57.6816 40.5378 65.8268 40.5378C71.1089 40.5378 74.1173 38.4163 76.0447 36.4889C77.609 34.9261 78.6355 32.6928 79.0405 29.6426L65.8268 29.6495Z"
                    fill="#4285F4"
                  />
                </g>
              </svg>
            </div>
            <div className="w-48 h-24  ">
              <svg
                className="w-full h-full"
                viewBox="0 0 251 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Palantir">
                  <path
                    id="Vector"
                    d="M84.0796 15.063H94.9176C98.9413 15.063 101.563 15.239 103.837 17.6873C105.408 19.4359 106.282 21.5337 106.282 23.982C106.282 26.4303 105.408 28.5253 103.659 30.2739C101.912 32.0211 99.6396 33.07 93.8701 33.07H88.6256V47.5839H84.0796V15.063ZM88.6256 29.401H93.8701C96.8421 29.401 101.388 29.2264 101.388 23.806C101.388 18.7362 97.1927 18.7362 94.7458 18.7362H88.6256V29.401ZM120.795 47.5839C120.445 46.5337 120.445 45.3102 120.445 44.2599C118.346 47.9317 115.374 48.2823 113.451 48.2823C108.205 48.2823 105.408 45.3102 105.408 41.6384C105.408 39.8898 106.107 36.9177 109.43 34.9945C111.877 33.5965 115.374 33.5965 117.297 33.5965C118.346 33.5965 119.046 33.5965 120.268 33.7697C120.268 30.975 120.268 29.7501 119.397 28.7013C118.521 27.6524 116.772 27.3032 115.549 27.3032C111.352 27.3032 111.003 30.2739 111.003 31.1496H106.807C106.983 29.9247 107.156 28.3521 108.38 26.9526C110.128 25.0309 113.275 24.5057 115.722 24.5057C119.046 24.5057 122.543 25.5546 123.765 27.8256C124.465 29.2264 124.465 30.2739 124.465 31.3214L124.29 42.1635C124.29 42.5113 124.29 45.4834 124.64 47.7571H120.795V47.5839ZM117.821 36.394C116.073 36.394 109.603 36.394 109.603 40.9401C109.603 42.3395 110.478 44.785 114.324 44.785C116.423 44.785 118.172 43.9121 119.219 42.3395C120.095 40.7627 120.268 39.5406 120.268 36.394C119.57 36.5672 118.871 36.394 117.821 36.394ZM128.137 15.063H132.334V47.5839H128.137V15.063ZM150.517 47.5839C150.166 46.5337 150.166 45.3102 150.166 44.2599C148.068 47.9317 145.096 48.2823 143.173 48.2823C137.929 48.2823 135.131 45.3102 135.131 41.6384C135.131 39.8898 135.83 36.9177 139.152 34.9945C141.601 33.5965 145.096 33.5965 147.02 33.5965C148.068 33.5965 148.768 33.5965 149.992 33.7697C149.992 30.975 149.992 29.7501 149.117 28.7013C148.243 27.6524 146.494 27.3032 145.272 27.3032C141.075 27.3032 140.726 30.2739 140.726 31.1496H136.531C136.704 29.9247 136.88 28.3521 138.105 26.9526C139.853 25.0309 142.999 24.5057 145.444 24.5057C148.768 24.5057 152.264 25.5546 153.489 27.8256C154.187 29.2264 154.187 30.2739 154.187 31.3214L154.013 42.1635C154.013 42.5113 154.013 45.4834 154.363 47.7571H150.517V47.5839ZM147.719 36.394C145.971 36.394 139.503 36.394 139.503 40.9401C139.503 42.3395 140.376 44.785 144.223 44.785C146.32 44.785 148.068 43.9121 149.117 42.3395C149.992 40.7627 150.166 39.5406 150.166 36.394C149.292 36.5672 148.768 36.394 147.719 36.394ZM158.035 27.6524V25.0309H162.23V28.7013C162.754 27.8256 164.33 24.6817 169.399 24.6817C171.496 24.6817 177.616 25.38 177.616 32.3716V47.7571H173.244V33.4205C173.244 32.0211 173.07 30.6244 172.022 29.5728C170.973 28.5253 169.399 28.0015 168 28.0015C164.852 28.0015 162.054 30.2739 162.054 34.8186V47.7571H157.857V27.6524H158.035ZM179.015 25.0309H183.036V20.1342L187.233 18.7362V24.8549H192.302V28.0015H187.233V41.4638C187.233 42.5113 187.233 44.4345 190.204 44.4345C191.078 44.4345 191.952 44.2599 192.302 44.2599V47.5839C191.602 47.7571 190.378 47.9317 188.804 47.9317C184.785 47.9317 183.036 46.7096 183.036 43.0378V28.0015H179.015V25.0309ZM195.274 15.063H200.345V19.7851H195.274V15.063ZM195.623 25.0309H199.82V47.5839H195.623V25.0309ZM203.842 29.5728C203.842 28.0015 203.665 26.4303 203.665 25.0309H207.862L208.036 29.401C208.911 26.2529 211.533 25.204 213.458 25.0309C214.682 24.8549 215.73 24.8549 216.43 24.8549V29.0518C216.256 29.0518 215.905 28.8758 215.556 28.8758C215.207 28.8758 214.856 28.8758 214.331 28.8758C209.263 28.8758 208.212 31.8479 208.212 35.6943V47.7571H204.017V29.5728H203.842ZM58.0293 10.6929C49.2863 10.6929 42.1173 17.8605 42.1173 26.6035C42.1173 35.3451 49.2863 42.5113 58.0293 42.5113C66.7695 42.5113 73.9385 35.3451 73.9385 26.6035C73.9385 17.8605 66.7695 10.6929 58.0293 10.6929ZM58.0293 37.6175C51.9106 37.6175 47.0153 32.7208 47.0153 26.6035C47.0153 20.4848 51.9106 15.5881 58.0293 15.5881C64.1466 15.5881 69.0419 20.4848 69.0419 26.6035C68.8673 32.7208 63.972 37.6175 58.0293 37.6175ZM72.1899 41.1147L58.0293 47.232L43.8659 41.1147L41.4189 45.4834L58.0293 52.4778L74.6382 45.4834L72.1899 41.1147Z"
                    fill="#2B2A35"
                  />
                </g>
              </svg>
            </div>
            <div className="w-48 h-24 p-5">
              <Image
                src="/instadeep.png"
                alt=""
                width={250}
                height={250}
                className="w-full h-full object-scale-down"
              />
            </div>
            <div className="w-48 h-24  ">
              <svg
                className="w-full h-full flex-shrink-0"
                viewBox="0 0 251 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="meta">
                  <path
                    id="path-1"
                    d="M47.1564 34.1676C47.1564 36.1816 47.6033 37.7277 48.1857 38.6634C48.9497 39.8883 50.0894 40.4078 51.2514 40.4078C52.7486 40.4078 54.1201 40.0391 56.7612 36.4162C58.8771 33.5126 61.3715 29.4358 63.0489 26.8799L65.8882 22.5517C67.8631 19.5447 70.1466 16.2011 72.7667 13.9358C74.905 12.0866 77.2123 11.0601 79.5321 11.0601C83.4301 11.0601 87.1424 13.2989 89.9846 17.5014C93.0936 22.102 94.6033 27.8967 94.6033 33.8771C94.6033 37.433 93.8966 40.0447 92.6941 42.1075C91.5321 44.1048 89.2681 46.0992 85.4595 46.0992V40.4078C88.7206 40.4078 89.5335 37.4358 89.5335 34.0349C89.5335 29.1886 88.3952 23.8101 85.8854 19.9665C84.1033 17.2402 81.7961 15.574 79.2556 15.574C76.5084 15.574 74.2975 17.6299 71.8142 21.2919C70.493 23.2388 69.1382 25.6117 67.6145 28.2877L65.9385 31.2318C62.5726 37.1522 61.7192 38.5 60.0363 40.7249C57.0866 44.6215 54.567 46.0992 51.2514 46.0992C47.3156 46.0992 44.8282 44.4078 43.2877 41.8631C42.0293 39.7877 41.412 37.0656 41.412 33.9637L47.1564 34.1676Z"
                    fill="#0081FB"
                  />
                  <path
                    id="path-2"
                    d="M45.9413 17.9022C48.5754 13.8757 52.377 11.0601 56.7374 11.0601C59.2611 11.0601 61.7723 11.8017 64.3924 13.9232C67.2597 16.2444 70.3156 20.0656 74.1284 26.3631L75.4958 28.6229C78.7946 34.0754 80.6717 36.8799 81.7709 38.2025C83.1843 39.9008 84.1745 40.4078 85.4594 40.4078C88.7206 40.4078 89.5335 37.4358 89.5335 34.0349L94.6033 33.8771C94.6033 37.433 93.8966 40.0447 92.6941 42.1075C91.5321 44.1048 89.2681 46.0992 85.4594 46.0992C83.0921 46.0992 80.9944 45.5894 78.6745 43.4176C76.891 41.7528 74.8072 38.7933 73.2025 36.1327L68.4329 28.2304C66.039 24.2654 63.8435 21.3073 62.5726 19.9679C61.2066 18.5279 59.4483 16.7891 56.6438 16.7891C54.3756 16.7891 52.4469 18.3687 50.8351 20.7835L45.9413 17.9022Z"
                    fill="url(#paint0_linear_3682_594)"
                  />
                  <path
                    id="path-3"
                    d="M56.6438 16.7891C54.3757 16.7891 52.4469 18.3687 50.8352 20.7835C48.5531 24.1983 47.1564 29.2835 47.1564 34.1676C47.1564 36.1816 47.6033 37.7277 48.1857 38.6634L43.2877 41.8631C42.0293 39.7877 41.412 37.0656 41.412 33.9637C41.412 28.3226 42.9734 22.4427 45.9413 17.9022C48.5754 13.8757 52.3771 11.0601 56.7374 11.0601L56.6438 16.7891Z"
                    fill="url(#paint1_linear_3682_594)"
                  />
                  <path
                    id="path-4"
                    d="M104.98 12.8687H111.626L122.926 33.1438L134.228 12.8687H140.729V46.1829H135.309V20.6508L125.397 38.3309H120.31L110.402 20.6508V46.1829H104.98V12.8687ZM157.718 25.2904C153.828 25.2904 151.487 28.1913 150.927 31.7862H164.123C163.851 28.0837 161.698 25.2904 157.718 25.2904ZM145.552 33.8323C145.552 26.2709 150.479 20.7681 157.811 20.7681C165.024 20.7681 169.331 26.2025 169.331 34.2374V35.7136H150.927C151.58 39.6228 154.196 42.2569 158.412 42.2569C161.778 42.2569 163.88 41.2388 165.874 39.377L168.754 42.8756C166.041 45.3505 162.589 46.7779 158.221 46.7779C150.284 46.7779 145.552 41.0376 145.552 33.8323ZM175.904 25.7681H170.913V21.3645H175.904V14.0837H181.136V21.3645H188.717V25.7681H181.136V36.9259C181.136 40.736 182.363 42.0907 185.383 42.0907C186.76 42.0907 187.55 41.9734 188.717 41.7807V46.1354C187.264 46.5418 185.877 46.729 184.374 46.729C178.726 46.729 175.904 43.6689 175.904 37.5446V25.7681ZM210.744 30.0488C209.693 27.4189 207.349 25.4804 203.905 25.4804C199.43 25.4804 196.563 28.6312 196.563 33.7611C196.563 38.7653 199.203 42.067 203.69 42.067C207.219 42.067 209.739 40.0307 210.744 37.4971V30.0488ZM215.975 46.1829H210.841V42.7094C209.404 44.7541 206.792 46.7779 202.563 46.7779C195.758 46.7779 191.212 41.1284 191.212 33.7611C191.212 26.3254 195.869 20.7681 202.851 20.7681C206.302 20.7681 209.01 22.1368 210.841 24.553V21.3645H215.975V46.1829Z"
                    fill="#192830"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_3682_594"
                    x1="52.694"
                    y1="32.5236"
                    x2="89.3172"
                    y2="34.3887"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0064E1" />
                    <stop offset="0.4" stop-color="#0064E1" />
                    <stop offset="0.83" stop-color="#0073EE" />
                    <stop offset="1" stop-color="#0082FB" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3682_594"
                    x1="49.7345"
                    y1="36.5594"
                    x2="49.7345"
                    y2="23.1679"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0082FB" />
                    <stop offset="1" stop-color="#0064E0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          {/* bottom 2 partner */}
          <div className="flex justify-around">
            <div className="w-48 h-28 ">
              <Image
                src="/databricks.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full object-scale-down"
              />
            </div>
            <div className="w-48 h-28 ">
              <Image
                src="/linkedin.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full object-scale-down"
              />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
