import React from "react";

function ActionBar() {
  const actionStyle = {
    opactiy: "0.6"
  };

  return (
    <div
      className="flex justify-around action-bar items-center w-full bottom-0 pb-1 absolute"
      style={actionStyle}
    >
      <svg
        viewBox="0 0 41 42"
        className="h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.68658 20.9999C1.68658 31.2809 9.9927 39.6153 20.2388 39.6153C30.4849 39.6153 38.7911 31.2809 38.7911 20.9999C38.7911 10.7189 30.4849 2.38452 20.2388 2.38452C9.9927 2.38452 1.68658 10.7189 1.68658 20.9999ZM35.4179 20.9999C35.4179 29.4116 28.622 36.2307 20.2388 36.2307C11.8556 36.2307 5.05972 29.4116 5.05972 20.9999C5.05972 12.5882 11.8556 5.76914 20.2388 5.76914C28.622 5.76914 35.4179 12.5882 35.4179 20.9999ZM21.9315 24.3817H23.6169V27.7663H16.8707V24.3817H18.5572V20.9971H16.8707V17.6125H21.9315V24.3817ZM21.9265 14.2279C21.9265 15.1625 21.1711 15.9202 20.2394 15.9202C19.3076 15.9202 18.5523 15.1625 18.5523 14.2279C18.5523 13.2932 19.3076 12.5356 20.2394 12.5356C21.1711 12.5356 21.9265 13.2932 21.9265 14.2279Z"
          fill="white"
        />
      </svg>
      <svg
        viewBox="0 0 45 44"
        className="h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="22.6866"
          cy="22"
          rx="21.9254"
          ry="22"
          fill="url(#paint0_linear)"
        />
        <path
          d="M33.1036 22L16.7339 11.5475V32.4525L33.1036 22Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="45.6339"
            y1="-3.05114e-05"
            x2="0.268851"
            y2="1.47004"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D81F26" />
            <stop offset="1" stop-color="#C50B4E" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        viewBox="0 0 38 35"
        className="h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.4405 0.0769315C23.9989 0.0769017 22.4251 0.368766 20.6209 1.25487C19.9529 1.58294 19.3263 1.97803 18.7443 2.43896C18.1847 2.00387 17.5831 1.62692 16.9428 1.30913C15.1036 0.39637 13.449 0.0769043 11.095 0.0769043C4.79044 0.0769043 0.208984 5.31843 0.208984 12.1259C0.208984 17.2669 3.06574 22.2331 8.38688 27.0352C11.1799 29.5558 14.746 32.0502 17.3 33.3772L18.7612 34.1365L20.2225 33.3772C22.7764 32.0502 26.3425 29.5558 29.1356 27.0352C34.4567 22.2331 37.3134 17.2669 37.3134 12.1259C37.3134 5.39049 32.6888 0.102895 26.4405 0.0769315ZM33.9403 12.1259C33.9403 16.1537 31.5558 20.2988 26.8799 24.5187C24.3306 26.8193 21.0532 29.1185 18.7612 30.3247C16.4692 29.1185 13.1919 26.8193 10.6426 24.5187C5.96662 20.2988 3.58212 16.1537 3.58212 12.1259C3.58212 7.09612 6.759 3.46152 11.095 3.46152C12.9667 3.46152 14.12 3.68421 15.4473 4.34295C16.2314 4.73205 16.9243 5.24584 17.5242 5.8879L18.7652 7.21625L19.9949 5.87737C20.6082 5.20959 21.3113 4.6841 22.1039 4.29486C23.3923 3.66205 24.4736 3.46152 26.4336 3.46153C30.716 3.47934 33.9403 7.16592 33.9403 12.1259Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.4405 0.0769315C23.9989 0.0769017 22.4251 0.368766 20.6209 1.25487C19.9529 1.58294 19.3263 1.97803 18.7443 2.43896C18.1847 2.00387 17.5831 1.62692 16.9428 1.30913C15.1036 0.39637 13.449 0.0769043 11.095 0.0769043C4.79044 0.0769043 0.208984 5.31843 0.208984 12.1259C0.208984 17.2669 3.06574 22.2331 8.38688 27.0352C11.1799 29.5558 14.746 32.0502 17.3 33.3772L18.7612 34.1365L20.2225 33.3772C22.7764 32.0502 26.3425 29.5558 29.1356 27.0352C34.4567 22.2331 37.3134 17.2669 37.3134 12.1259C37.3134 5.39049 32.6888 0.102895 26.4405 0.0769315ZM33.9403 12.1259C33.9403 16.1537 31.5558 20.2988 26.8799 24.5187C24.3306 26.8193 21.0532 29.1185 18.7612 30.3247C16.4692 29.1185 13.1919 26.8193 10.6426 24.5187C5.96662 20.2988 3.58212 16.1537 3.58212 12.1259C3.58212 7.09612 6.759 3.46152 11.095 3.46152C12.9667 3.46152 14.12 3.68421 15.4473 4.34295C16.2314 4.73205 16.9243 5.24584 17.5242 5.8879L18.7652 7.21625L19.9949 5.87737C20.6082 5.20959 21.3113 4.6841 22.1039 4.29486C23.3923 3.66205 24.4736 3.46152 26.4336 3.46153C30.716 3.47934 33.9403 7.16592 33.9403 12.1259Z"
          fill="white"
        />
        <path
          d="M20.6209 1.25487L12.2449 -15.7992L12.2449 -15.7992L20.6209 1.25487ZM26.4405 0.0769315L26.5195 -18.9229L26.4801 -18.9231L26.4408 -18.9231L26.4405 0.0769315ZM18.7443 2.43896L7.08156 17.4383L18.8523 26.5907L30.5407 17.3334L18.7443 2.43896ZM16.9428 1.30913L8.49634 18.3285H8.49634L16.9428 1.30913ZM8.38688 27.0352L-4.34262 41.1405H-4.34262L8.38688 27.0352ZM17.3 33.3772L26.0604 16.5174L26.0604 16.5173L17.3 33.3772ZM18.7612 34.1365L10.0008 50.9964L18.7612 55.5483L27.5216 50.9964L18.7612 34.1365ZM20.2225 33.3772L11.4621 16.5173L11.4621 16.5174L20.2225 33.3772ZM29.1356 27.0352L41.865 41.1405L41.8651 41.1405L29.1356 27.0352ZM26.8799 24.5187L14.1504 10.4133L14.1504 10.4133L26.8799 24.5187ZM18.7612 30.3247L9.91255 47.1384L18.7612 51.7953L27.6099 47.1384L18.7612 30.3247ZM10.6426 24.5187L-2.08694 38.624H-2.08694L10.6426 24.5187ZM15.4473 4.34295L23.8938 -12.6764L23.8938 -12.6764L15.4473 4.34295ZM17.5242 5.8879L3.64037 18.8586L17.5242 5.8879ZM18.7652 7.21625L4.88135 20.187L18.8839 35.1752L32.7586 20.0686L18.7652 7.21625ZM19.9949 5.87737L33.9883 18.7297L33.9883 18.7297L19.9949 5.87737ZM22.1039 4.29486L13.7279 -12.7593L13.7279 -12.7593L22.1039 4.29486ZM26.4336 3.46153L26.5126 -15.5383L26.4731 -15.5385H26.4337L26.4336 3.46153ZM28.9969 18.309C28.8295 18.3912 28.5423 18.5206 28.1583 18.6534C27.7671 18.7887 27.3716 18.8943 26.9964 18.9689C26.2739 19.1126 25.9361 19.0769 26.4403 19.0769L26.4408 -18.9231C21.9852 -18.9231 17.3517 -18.3074 12.2449 -15.7992L28.9969 18.309ZM30.5407 17.3334C30.0547 17.7183 29.5335 18.0454 28.9969 18.309L12.2449 -15.7992C10.3724 -14.8796 8.59788 -13.7623 6.94787 -12.4555L30.5407 17.3334ZM8.49634 18.3285C8.01692 18.0905 7.53891 17.7939 7.08156 17.4383L30.407 -12.5604C28.8306 -13.7862 27.1493 -14.8367 25.3892 -15.7102L8.49634 18.3285ZM11.095 19.0769C11.4279 19.0769 11.0664 19.1023 10.3637 18.9569C10.0094 18.8837 9.64324 18.7828 9.28557 18.6571C8.93307 18.5333 8.66429 18.4118 8.49634 18.3285L25.3892 -15.7102C20.3447 -18.2137 15.6545 -18.9231 11.095 -18.9231V19.0769ZM19.209 12.1259C19.209 12.9706 18.904 14.5893 17.4486 16.2163C15.8863 17.9627 13.5099 19.0769 11.095 19.0769V-18.9231C-7.6384 -18.9231 -18.791 -3.12885 -18.791 12.1259H19.209ZM21.1164 12.9299C19.5572 11.5228 19.0183 10.6728 18.9141 10.485C18.8768 10.418 18.9575 10.5475 19.0454 10.8642C19.1367 11.1929 19.209 11.6279 19.209 12.1259H-18.791C-18.791 24.8507 -11.6552 34.5412 -4.34262 41.1405L21.1164 12.9299ZM26.0604 16.5173C25.7641 16.3634 24.9896 15.9099 23.913 15.1476C22.8767 14.4138 21.8842 13.6228 21.1164 12.9299L-4.34262 41.1405C-0.534923 44.5768 4.34453 48.0574 8.53961 50.2371L26.0604 16.5173ZM27.5216 17.2766L26.0604 16.5174L8.53959 50.2371L10.0008 50.9964L27.5216 17.2766ZM11.4621 16.5174L10.0008 17.2766L27.5216 50.9964L28.9829 50.2371L11.4621 16.5174ZM16.4061 12.9299C15.6383 13.6228 14.6457 14.4138 13.6095 15.1476C12.5328 15.9099 11.7583 16.3634 11.4621 16.5173L28.9828 50.2371C33.1779 48.0574 38.0574 44.5768 41.865 41.1405L16.4061 12.9299ZM18.3134 12.1259C18.3134 11.6279 18.3857 11.1929 18.477 10.8642C18.565 10.5475 18.6456 10.418 18.6084 10.485C18.5042 10.6728 17.9652 11.5228 16.4061 12.9299L41.8651 41.1405C49.1777 34.5412 56.3134 24.8507 56.3134 12.1259H18.3134ZM26.3616 19.0768C23.8576 19.0664 21.5357 17.9048 20.0548 16.2481C18.6638 14.6921 18.3134 13.0975 18.3134 12.1259H56.3134C56.3134 -3.09484 45.1033 -18.8457 26.5195 -18.9229L26.3616 19.0768ZM39.6094 38.624C45.9764 32.878 52.9403 23.9998 52.9403 12.1259H14.9403C14.9403 11.2335 15.0757 10.4643 15.2491 9.86729C15.4181 9.28537 15.6026 8.93624 15.6647 8.8276C15.7236 8.72436 15.6787 8.82593 15.4302 9.12064C15.1824 9.41448 14.7752 9.84951 14.1504 10.4133L39.6094 38.624ZM27.6099 47.1384C31.4975 45.0924 36.0593 41.8278 39.6094 38.624L14.1504 10.4133C13.5 11.0003 12.6312 11.6949 11.7119 12.3488C10.7508 13.0324 10.0966 13.4141 9.91256 13.511L27.6099 47.1384ZM-2.08694 38.624C1.46312 41.8278 6.02492 45.0924 9.91255 47.1384L27.6099 13.511C27.4258 13.4141 26.7717 13.0324 25.8106 12.3488C24.8912 11.6949 24.0224 11.0003 23.372 10.4133L-2.08694 38.624ZM-15.4179 12.1259C-15.4179 23.9998 -8.45393 32.878 -2.08694 38.624L23.372 10.4133C22.7473 9.84951 22.34 9.41448 22.0922 9.12065C21.8437 8.82594 21.7988 8.72436 21.8578 8.8276C21.9198 8.93624 22.1043 9.28537 22.2734 9.86729C22.4468 10.4643 22.5821 11.2335 22.5821 12.1259H-15.4179ZM11.095 -15.5385C-6.14872 -15.5385 -15.4179 -0.808061 -15.4179 12.1259H22.5821C22.5821 13.5753 22.1026 16.0134 20.053 18.3716C17.8756 20.8767 14.5711 22.4615 11.095 22.4615V-15.5385ZM23.8938 -12.6764C19.2381 -14.9869 14.9955 -15.5385 11.095 -15.5385V22.4615C11.3252 22.4615 10.7226 22.4815 9.7394 22.2843C8.60721 22.0572 7.64955 21.6842 7.0009 21.3623L23.8938 -12.6764ZM31.408 -7.08283C29.2383 -9.40522 26.6989 -11.2842 23.8938 -12.6764L7.0009 21.3623C5.76383 20.7483 4.61035 19.8969 3.64037 18.8586L31.408 -7.08283ZM32.649 -5.75449L31.408 -7.08283L3.64037 18.8586L4.88135 20.187L32.649 -5.75449ZM6.00142 -6.975L4.77172 -5.63613L32.7586 20.0686L33.9883 18.7297L6.00142 -6.975ZM13.7279 -12.7593C10.7942 -11.3184 8.19197 -9.36005 6.0014 -6.97498L33.9883 18.7297C33.0244 19.7792 31.8284 20.6866 30.4798 21.349L13.7279 -12.7593ZM26.4337 -15.5385C22.6833 -15.5385 18.466 -15.0863 13.7279 -12.7593L30.4798 21.349C30.206 21.4835 29.7799 21.6747 29.2315 21.8634C28.6719 22.056 28.1135 22.2019 27.5826 22.3033C26.5923 22.4925 26.0164 22.4615 26.4334 22.4615L26.4337 -15.5385ZM52.9403 12.1259C52.9403 -0.785029 43.6032 -15.4672 26.5126 -15.5383L26.3545 22.4614C22.7459 22.4464 19.5148 20.7781 17.4502 18.402C15.4838 16.1386 14.9403 13.7388 14.9403 12.1259H52.9403Z"
          fill="white"
          mask="url(#path-1-inside-1)"
        />
      </svg>
    </div>
  );
}

export default ActionBar;