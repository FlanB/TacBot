import './Home.scss'
// import { Link } from "react-router-dom"
import { fireContext } from '../App'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const { user } = useContext(fireContext)
  return (
    <>
      <div className="home">
        {/* <h1>Michel</h1> */}
        <div className="hello">
          <svg
            width="24"
            height="46"
            viewBox="0 0 27 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.04991 17.4716C0.720494 19.0363 0.885202 20.9716 0.885202 20.9716L1.8298 24.9168L2.82052 26.9011L3.76759 28.0953C3.76759 28.0953 4.74514 28.2126 5.57938 29.3306C6.16204 30.1129 7.33023 31.2988 7.92648 31.3894C8.54907 31.4841 9.73826 32.3777 9.73826 32.3777L15.3075 33.823C15.3075 33.823 16.6968 34.0746 17.8913 33.823C19.0859 33.5714 19.9913 33.613 19.9913 33.613C19.9913 33.613 22.709 32.0483 23.3679 31.6365C23.8978 31.3071 25.3748 29.0296 25.3748 29.0296L26.1679 27.2717L26.6764 22.4099L25.715 21.0952L23.3777 18.8992L22 18.0069C22 18.0069 11.0283 17.6062 5.16761 17.7187C3.31959 17.7541 1.13226 17.0866 1.04991 17.4716Z"
              fill="#DED8E6"
            ></path>
            <path
              d="M22.1103 23.6502C22.1103 23.6502 23.675 24.8143 23.7961 24.9749C23.9172 25.1355 23.7158 25.1355 23.5552 25.0951C23.3946 25.0548 21.5079 24.2123 21.5079 24.2123L15.1254 25.777H11.8725L11.0695 27.0214L11.5912 25.4155L9.90543 24.0105L9.62419 25.014L7.85811 24.6529C7.85811 24.6529 8.701 24.2918 8.7813 23.6091C8.86159 22.9263 8.42059 22.1246 8.42059 22.1246L5.61231 22.767L5.53202 22.4458L8.26164 21.6832L7.77987 20.8403L4.00682 21.6433C4.00682 21.6433 4.56889 21.0413 5.7729 20.8807C5.8532 20.8807 5.79308 20.5393 5.79308 20.5393L2.90286 21.0211V22.606L3.74576 22.7872C3.69861 22.835 3.65816 22.889 3.62552 22.9478C3.58434 23.0301 3.62552 23.068 3.6667 23.1483C3.70787 23.2286 4.58989 25.1557 4.63024 25.2759C4.67059 25.3961 4.92383 25.4764 5.19848 25.2759C5.47313 25.0754 7.23922 23.9916 7.23922 23.9916L7.35987 24.1518L5.63372 25.5971C5.63372 25.5971 7.11898 28.7422 7.35987 29.0761C7.60075 29.4101 8.28305 29.7317 8.28305 29.7317C8.28305 29.7317 8.52394 31.1366 8.76483 30.9357C9.00571 30.7347 10.7129 31.9384 12.2678 30.9555C12.2678 30.9555 13.4619 30.8155 14.9463 32.5012C16.07 32.381 16.873 32.4601 16.873 32.4601C16.873 32.4601 17.0739 31.898 17.1139 31.6168C17.1538 31.3355 17.2345 31.2157 17.5553 31.095C17.8761 30.9744 18.0371 30.5733 17.9971 29.8507C17.9697 29.3931 17.9161 28.9375 17.8365 28.4861L18.1977 28.6467L18.8796 30.8953C19.193 30.7724 19.4897 30.6105 19.7628 30.4136C20.2042 30.0924 20.5254 30.3333 20.4855 30.8953C20.4455 31.4574 21.2077 30.253 20.8466 29.2483C20.4855 28.2435 20.0037 28.1645 19.5623 27.4019C19.1209 26.6393 19.883 27.0807 19.883 27.0807L22.693 31.2956L23.6973 30.2933L22.6938 29.5307C22.9566 29.4272 23.1906 29.2619 23.3761 29.049C23.6973 28.6878 23.3761 28.0455 23.1356 27.7646C22.7741 27.7646 22.0918 27.4035 21.9312 26.6405C22.0169 26.5804 22.0974 26.5133 22.1721 26.44L23.2941 27.7247C23.2941 27.7247 23.7759 27.7659 24.1375 27.6448C24.499 27.5238 25.9838 25.0354 25.9838 25.0354L22.4714 23.3698L22.1103 23.6502Z"
              fill="#EFEEEF"
            ></path>
            <path
              d="M26.7444 21.754C26.6208 21.5893 26.6571 21.7907 26.5722 21.7833C26.0806 21.7421 24.2836 21.6124 22.5719 21.7833C22.5307 22.0641 22.6131 22.1444 22.6131 22.1444C22.6131 22.1444 24.2601 21.7833 23.7771 23.2685H24.7143L24.5801 23.1079C24.5801 23.1079 24.821 22.4656 25.0215 22.4656C25.222 22.4656 26.5796 22.5364 26.5796 22.5364L26.9091 22.4129C26.9091 22.4129 26.8679 21.9188 26.7444 21.754Z"
              fill="#EFEEEF"
            ></path>
            <path
              d="M22.3796 23.6894C22.2655 23.6688 22.2515 23.3299 22.1325 23.3188C22.1626 23.0046 22.3458 22.4923 22.4051 22.1843C22.4331 22.0398 22.478 21.899 22.5167 21.7569C22.5241 21.7302 22.5101 21.6877 22.5505 21.6812C22.5908 21.6746 22.6024 21.7203 22.6213 21.7483C22.6681 21.8228 22.6858 21.9119 22.6711 21.9986C22.6291 22.3917 22.5854 22.7847 22.5398 23.1775C22.5361 23.2072 22.3903 23.6605 22.3796 23.6894Z"
              fill="#763994"
            ></path>
            <path
              d="M16.845 33.9984C16.6111 33.9881 16.3991 34.019 16.1862 33.9778C16.1564 33.9714 16.1261 33.9678 16.0956 33.9671C15.4186 33.9729 14.7487 33.9017 14.0779 33.823C12.925 33.6884 11.8152 33.3944 10.7088 33.0757C10.1612 32.9175 9.62791 32.7108 9.09014 32.5214C8.89743 32.4535 8.77061 32.2892 8.61949 32.1636C8.23613 31.8457 7.86554 31.513 7.48547 31.1914C7.45602 31.169 7.43224 31.14 7.41607 31.1068C7.39991 31.0735 7.3918 31.0369 7.39241 30.9999C7.38418 30.8101 7.413 30.624 7.42906 30.437C7.44265 30.2723 7.65347 30.1076 7.85318 30.1015C8.54743 30.0837 9.24003 30.1484 9.93427 30.1352C10.1241 30.1315 10.2394 30.2839 10.2513 30.472C10.2639 30.6897 10.2878 30.9066 10.323 31.1218C10.337 31.2013 10.323 31.2486 10.2678 31.2939C10.178 31.3685 10.087 31.4414 9.99727 31.5159C9.96186 31.5451 9.92727 31.5752 9.89474 31.6073C9.82515 31.6744 9.8408 31.7621 9.86015 31.8379C9.87951 31.9136 9.95568 31.8679 10.0063 31.8791L10.7026 32.0438C10.9003 32.0907 11.0971 32.1405 11.2952 32.1842C11.5688 32.2431 11.8332 32.3386 12.0812 32.4683C12.561 32.7191 13.0489 32.9538 13.5323 33.198C13.7073 33.2865 13.8992 33.2857 14.0825 33.2803C14.2233 33.2762 14.269 33.109 14.3559 33.0147C14.5206 32.8356 14.6635 32.6367 14.8323 32.4597C14.9266 32.3612 15.0061 32.4123 15.0917 32.4597C15.1773 32.507 15.2082 32.5531 15.1741 32.6573C15.1456 32.7462 15.1617 32.8488 15.1576 32.9455C15.1547 33.0168 15.2095 33.037 15.2589 33.065C15.7283 33.331 16.1981 33.5957 16.6647 33.8671C16.719 33.9013 16.7977 33.8955 16.845 33.9984Z"
              fill="#763994"
            ></path>
            <path
              d="M4.35805 17.3255C4.36165 17.3662 4.37727 17.4049 4.40293 17.4367C4.75102 18.0247 5.09828 18.6128 5.44471 19.2011C5.4653 19.2361 5.49742 19.2657 5.48095 19.3119C5.16759 19.0981 4.26417 18.8717 3.97346 18.6246C3.72639 18.3775 4.47788 18.4648 4.61088 18.401C4.66153 18.3767 4.76612 18.3598 4.73812 18.2598C4.71011 18.1597 4.62488 18.1325 4.52235 18.1363C3.80298 18.1519 3.08444 18.1045 2.36549 18.0984C1.95372 18.0951 1.54195 18.077 1.13018 18.0477C1.026 18.0403 0.981534 17.9654 0.921827 17.9077C0.674765 17.664 0.671882 17.6607 0.871591 17.3724C1.0643 17.0924 1.26566 16.8182 1.46125 16.5398C1.54772 16.4163 1.66507 16.3961 1.79849 16.4319C2.5932 16.644 4.06322 17.0414 4.1814 17.0731C4.29958 17.1048 4.38523 17.1834 4.35805 17.3255Z"
              fill="#723190"
            ></path>
            <path
              d="M0.734467 20.6448C0.750526 20.5295 0.69329 20.4063 0.832057 20.3269C1.02888 20.2128 1.1203 20.2285 1.24836 20.415C1.60166 20.9305 1.95331 21.4481 2.32637 21.9492C2.33984 21.9645 2.34989 21.9825 2.35586 22.0019C2.36182 22.0214 2.36356 22.0419 2.36096 22.0621C2.3309 22.2367 2.31155 22.415 2.26131 22.5838C2.24566 22.6233 2.24169 22.6666 2.24986 22.7083C2.25804 22.7501 2.27802 22.7886 2.30743 22.8193C2.33312 22.8513 2.36062 22.8819 2.38978 22.9107C2.61049 23.1125 2.59361 23.3188 2.45979 23.5757C2.2539 23.9677 2.0966 24.3836 1.94713 24.8012C1.92572 24.8609 1.91213 24.9169 1.82936 24.9169C1.74042 24.9169 1.75813 24.8539 1.74454 24.802C1.53289 23.9933 1.18247 23.2348 0.888057 22.4549C0.866234 22.3981 0.833703 22.3396 0.832468 22.2815C0.820939 21.7335 0.764938 21.1866 0.734467 20.6448Z"
              fill="#763994"
            ></path>
            <path
              d="M20.3422 31.9733C20.1058 31.9989 19.8995 32.1183 19.6759 32.1846C19.5495 32.222 19.426 32.2706 19.2983 32.3036C19.216 32.3246 19.1521 32.3163 19.1966 32.1961C19.2221 32.1185 19.2654 32.048 19.323 31.9902C19.8089 31.5164 20.2941 31.0419 20.7786 30.5667C20.8737 30.4737 21.1603 30.5128 21.2913 30.6343C21.4123 30.7463 21.4049 30.8323 21.2695 30.9995C21.078 31.2363 20.8915 31.4767 20.6996 31.7131C20.6172 31.8127 20.6584 31.842 20.7642 31.8482C20.8044 31.8514 20.844 31.8593 20.8824 31.8716C21.134 31.9499 21.1995 32.1187 21.0603 32.3386C20.9297 32.5445 20.7951 32.7483 20.6621 32.9529C20.5073 33.1909 20.3413 33.4223 20.2091 33.6744C20.1992 33.6984 20.1818 33.7186 20.1597 33.7323C20.1375 33.7459 20.1116 33.7521 20.0856 33.7501C19.9576 33.7415 19.8328 33.7728 19.7064 33.7802C19.2802 33.8049 18.8532 33.8139 18.4274 33.8465C18.0383 33.8761 17.6504 33.9247 17.2592 33.9338C17.2181 33.9338 17.1555 33.9601 17.1357 33.9062C17.1159 33.8522 17.1769 33.8275 17.2082 33.7995C17.4728 33.5765 17.7673 33.3916 18.0832 33.2502C18.2631 33.1679 18.4904 33.1872 18.6971 33.1679C18.9545 33.1436 19.2123 33.1238 19.4704 33.1065C19.5008 33.1028 19.53 33.0921 19.5556 33.0753C19.5811 33.0584 19.6025 33.0358 19.6178 33.0093C19.8484 32.7001 20.077 32.3896 20.3067 32.0796C20.3314 32.0462 20.357 32.0145 20.3384 31.9692L20.357 31.9618C20.3537 31.9618 20.3491 31.9593 20.3479 31.9618C20.3453 31.9653 20.3434 31.9692 20.3422 31.9733Z"
              fill="#723190"
            ></path>
            <path
              d="M26.9066 24.3177C26.9066 24.8032 26.8847 25.2903 26.9144 25.7741C26.9354 26.1213 26.8283 26.4091 26.6628 26.6961C26.4462 27.0712 26.2346 27.4492 26.0361 27.8338C25.9784 27.9454 25.85 27.9697 25.8006 28.0809C25.7853 28.1151 25.7594 28.0809 25.738 28.0525C25.649 27.9318 25.642 27.7869 25.6214 27.6489C25.5552 27.203 25.4979 26.7554 25.4362 26.3086C25.3793 25.9067 25.432 25.8602 25.8199 25.9792C26.1135 26.0706 26.1189 26.0698 26.0764 25.7643C26.0447 25.5337 25.9784 25.3064 25.9599 25.0749C25.9332 24.7426 26.0892 24.4412 26.1658 24.1279C26.2552 23.7622 26.3626 23.4015 26.4635 23.0392C26.4856 22.9494 26.4891 22.8561 26.4738 22.7649C26.4483 22.5878 26.5113 22.4701 26.676 22.4083C26.7414 22.3836 26.797 22.2959 26.8625 22.326C26.9449 22.3643 26.9037 22.4639 26.9037 22.5364C26.909 23.1314 26.9066 23.7243 26.9066 24.3177Z"
              fill="#763994"
            ></path>
            <path
              d="M26.5706 21.9093L25.6602 21.8039C25.5144 21.7874 25.3686 21.7627 25.222 21.7565C25.124 21.7516 25.0672 21.7335 25.1191 21.6239C25.1492 21.5601 25.1294 21.5049 25.0985 21.4497C24.8148 20.9433 24.5385 20.4323 24.2429 19.9324C24.1333 19.7479 23.9213 19.6577 23.7586 19.5206C23.575 19.3682 23.3777 19.2324 23.1941 19.08C23.0751 18.9816 23.1616 18.8457 23.1805 18.7423C23.2344 18.4541 23.2513 18.4541 23.4943 18.6246C24.051 19.0171 24.6063 19.4116 25.1603 19.808C25.3538 19.9464 25.4687 20.1564 25.6165 20.3351C25.9756 20.7695 26.3198 21.2163 26.6702 21.6581C26.6735 21.662 26.6769 21.6657 26.6805 21.6692C26.7295 21.7252 26.7728 21.7927 26.7444 21.8632C26.7114 21.9476 26.6262 21.8899 26.5706 21.9093Z"
              fill="#763994"
            ></path>
            <path
              d="M3.59256 27.8853C4.08669 27.6856 4.58287 27.4871 5.07741 27.2862C5.19806 27.2376 5.26106 27.2553 5.28659 27.4006C5.33518 27.6749 5.40435 27.9454 5.462 28.2176C5.48877 28.344 5.52047 28.4498 5.69136 28.4144C5.91495 28.3683 6.14678 28.4 6.37243 28.3547C6.43281 28.3432 6.4949 28.3439 6.55501 28.3568C6.61512 28.3696 6.67205 28.3944 6.72243 28.4297C6.74714 28.4461 6.78543 28.4535 6.78131 28.4914C6.77555 28.5412 6.7319 28.5355 6.69896 28.5355C6.50502 28.5355 6.31066 28.5417 6.11713 28.5355C6.07424 28.5327 6.0314 28.5416 5.99314 28.5612C5.95487 28.5808 5.9226 28.6103 5.89971 28.6467C5.81406 28.7595 5.72348 28.869 5.62753 28.9732C5.58636 29.0197 5.57359 29.0275 5.63083 29.0811C5.68806 29.1346 5.70618 29.2334 5.73747 29.3137C5.75271 29.3516 5.75889 29.3961 5.79718 29.4167C5.84371 29.441 5.94501 29.4257 5.87212 29.5254C5.86179 29.5422 5.848 29.5567 5.83166 29.5678C5.81532 29.5789 5.7968 29.5864 5.77734 29.5899C5.75788 29.5933 5.73791 29.5925 5.71876 29.5877C5.6996 29.5828 5.6817 29.5739 5.66624 29.5616C5.43153 29.3388 5.13506 29.2153 4.86946 29.0428C4.57587 28.8517 4.25634 28.6981 3.9751 28.4918C3.79927 28.363 3.69056 28.1529 3.56909 27.9664C3.57733 27.9384 3.58474 27.9117 3.59256 27.8853Z"
              fill="#723190"
            ></path>
            <path
              d="M22.8079 31.1243C23.0022 30.8818 23.1871 30.6417 23.3707 30.4008C23.4152 30.3516 23.4565 30.2996 23.4943 30.2452C23.5614 30.1274 23.6685 30.1628 23.7652 30.1682C23.8253 30.1723 23.8233 30.218 23.7887 30.2555C23.7572 30.2884 23.7229 30.3186 23.6862 30.3456C23.6503 30.3732 23.5939 30.395 23.6087 30.4449C23.6162 30.4692 23.6742 30.4832 23.7117 30.4918C23.8059 30.5145 23.9052 30.5008 23.9898 30.4535C24.0744 30.4062 24.138 30.3287 24.1679 30.2365C24.2993 29.8247 24.4257 29.413 24.6822 29.0518C24.8511 28.8159 24.996 28.7797 25.2352 28.9361C25.2835 28.9648 25.3301 28.9962 25.3748 29.03C25.4473 29.0889 25.4881 29.1498 25.3522 29.1778C25.311 29.1869 25.2974 29.2161 25.2826 29.2495C25.1525 29.5377 25.0211 29.826 24.891 30.1142C24.8468 30.2175 24.7832 30.3113 24.7036 30.3905C24.2272 30.8521 23.7627 31.3273 23.2756 31.7769C23.0669 31.9701 22.7939 32.0796 22.5266 32.1805C22.4756 32.1998 22.4031 32.1883 22.4422 32.1113C22.4999 31.9964 22.5151 31.8671 22.5744 31.7551C22.6501 31.6122 22.7292 31.5904 22.8721 31.6604C22.8861 31.667 22.9001 31.6732 22.9133 31.6802C23.0874 31.7716 23.0821 31.77 23.1385 31.5822C23.1731 31.4761 23.2155 31.3727 23.2653 31.2729C23.3308 31.135 23.3226 31.1161 23.1768 31.1152C23.0538 31.1087 22.9304 31.1117 22.8079 31.1243V31.1243Z"
              fill="#763994"
            ></path>
            <path
              d="M3.30475 27.6465C3.12398 27.3792 2.95268 27.1033 2.71221 26.883C2.67103 26.8464 2.6595 26.8184 2.69203 26.7842C2.70043 26.7743 2.71082 26.7662 2.72253 26.7606C2.73424 26.7549 2.747 26.7518 2.76 26.7513C2.77299 26.7509 2.78594 26.7532 2.79799 26.7581C2.81004 26.763 2.82094 26.7703 2.82997 26.7797C3.02309 26.9666 3.26686 27.0704 3.49745 27.1956C3.64899 27.2779 3.65763 27.3228 3.5411 27.4447C3.4781 27.511 3.41757 27.5793 3.35539 27.6469L3.30475 27.6465Z"
              fill="#763994"
            ></path>
            <path
              d="M20.342 31.9725C20.3435 31.9685 20.3457 31.9647 20.3485 31.9614C20.3485 31.9614 20.3539 31.9614 20.357 31.9614L20.3397 31.9683L20.342 31.9725Z"
              fill="#DDD7E5"
            ></path>
            <path
              d="M5.24994 19.1187C5.39282 19.1249 5.78524 19.3942 5.90877 19.4481C6.38066 19.654 6.80025 19.885 7.26761 20.0979C7.45538 20.1831 7.48214 20.2111 7.54267 20.41C7.65467 20.7753 7.76709 21.1405 7.87621 21.5066C7.88815 21.5477 7.93056 21.5889 7.88568 21.6334C7.75844 21.4353 7.59167 21.2591 7.54062 21.0182C7.53197 20.977 7.49573 20.9659 7.46444 20.9486C7.1519 20.7773 6.84061 20.6044 6.52684 20.4351C6.44063 20.391 6.36729 20.3253 6.31395 20.2445C6.20442 20.0798 6.09777 19.9118 5.97589 19.7561C5.85401 19.6005 5.66459 19.4975 5.51635 19.3596C5.50359 19.3468 5.26147 19.1344 5.24994 19.1187Z"
              fill="#723190"
            ></path>
            <path
              d="M21.4737 3.10083C21.4737 3.10083 24.0847 5.03616 23.5943 13.7039C23.5367 14.7247 23.6268 15.9592 23.3884 17.6158C23.1171 19.5004 22.0708 23.5041 22.0708 23.5041L12.0586 24.2811L6.95877 17.4099C6.95877 17.4099 7.12348 8.7215 7.16466 8.7215C7.20583 8.7215 10.2118 2.092 10.2118 2.092C10.2118 2.092 14.6177 1.30963 14.7001 1.30963C14.7824 1.30963 19.3531 1.68022 19.3531 1.68022L21.4737 3.10083Z"
              fill="#DED8E6"
            ></path>
            <path
              d="M18.8598 20.8391C18.6852 20.8354 18.607 20.6904 18.5205 20.5809C18.3821 20.4051 18.2322 20.2857 18.0025 20.24C17.6286 20.165 17.2613 20.058 16.8907 19.9678C16.7956 19.9447 16.6564 19.8908 16.6161 19.9925C16.5724 20.1012 16.7058 20.1765 16.796 20.2243C17.1073 20.389 17.4248 20.5418 17.7389 20.7011C17.7801 20.7225 17.8374 20.7291 17.8625 20.7901C17.7278 20.8391 17.6018 20.7703 17.4729 20.7715C17.0097 20.7757 16.5485 20.8193 16.0861 20.8341C16.0317 20.8362 15.9729 20.8514 15.9251 20.8078C16.124 20.7444 16.3344 20.7761 16.5514 20.7254C16.4653 20.6237 16.3805 20.5216 16.2936 20.4215C16.1466 20.2527 16.0013 20.0831 15.8497 19.9188C15.797 19.8615 15.8024 19.8138 15.8362 19.7541C16.1713 19.1663 16.506 18.5783 16.8401 17.99C16.8722 17.9332 16.9088 17.8764 16.9068 17.8052C16.8936 17.3259 16.9603 16.8482 16.9372 16.3689C16.9372 16.3397 16.9315 16.3108 16.9261 16.2606C16.7997 16.3627 16.7536 16.5031 16.651 16.5983C16.2665 16.9553 15.8876 17.318 15.5063 17.6787C15.4878 17.696 15.468 17.722 15.447 17.7244C15.368 17.7335 15.277 17.8101 15.2152 17.7483C15.1534 17.6866 15.2325 17.6034 15.2712 17.5486C15.5109 17.2081 15.7583 16.8737 16.0037 16.5377C16.2434 16.2083 16.4855 15.8842 16.7231 15.5548C16.8244 15.414 16.8083 15.3288 16.6819 15.2135C16.5695 15.1118 16.5226 14.9664 16.4464 14.8429C16.3167 14.63 16.1993 14.4085 16.0758 14.1919C16.0482 14.1433 16.0309 14.1005 16.0758 14.0547C16.1722 14.0576 16.2673 14.0655 16.364 14.077C16.5345 14.0976 16.7054 14.1342 16.8796 14.1161C16.9039 14.1136 16.9335 14.1198 16.9463 14.0914C16.9591 14.063 16.936 14.0445 16.9154 14.0305C16.8331 13.974 16.7606 13.902 16.6683 13.8563C16.0371 13.5479 15.4083 13.2345 14.7783 12.9224C14.6692 12.8635 14.5469 12.887 14.4324 12.8812C14.1162 12.8664 13.8037 12.7956 13.4808 12.8833C12.962 13.0241 12.4349 13.1349 11.9107 13.2559C11.8176 13.2819 11.727 13.3161 11.6398 13.358C11.5047 13.4153 11.4232 13.3601 11.417 13.2135C11.4063 12.9701 11.4319 12.9294 11.6641 12.8738C12.0833 12.7737 12.4983 12.6502 12.9254 12.5893C13.2515 12.5427 13.5817 12.5246 13.9095 12.4896C14.1409 12.4646 14.372 12.4358 14.6029 12.4031C14.78 12.3788 14.9455 12.4398 15.1135 12.4719C15.6019 12.5645 16.0877 12.6683 16.5745 12.7671C16.6168 12.7728 16.6574 12.7875 16.6935 12.8103C16.7296 12.8331 16.7604 12.8635 16.7836 12.8993C17.1583 13.4688 17.5339 14.0383 17.9214 14.5991C18.007 14.7226 17.9807 14.8552 18.0008 14.9804C18.0527 15.3053 18.0696 15.6355 18.1046 15.9633C18.1417 16.3108 18.1845 16.658 18.222 17.0055C18.2467 17.2377 18.5411 17.6915 18.5514 17.9242C18.579 18.5093 18.4068 18.8609 18.5473 19.4292C18.6617 19.8969 18.756 20.3693 18.8598 20.8391Z"
              fill="#723190"
            ></path>
            <path
              d="M14.7754 12.9224C15.4054 13.2345 16.0342 13.5479 16.6654 13.8563C16.7593 13.902 16.8302 13.974 16.9125 14.0305C16.9331 14.0445 16.9574 14.0605 16.9434 14.0914C16.9294 14.1223 16.9022 14.1136 16.8767 14.1161C16.7025 14.1342 16.5316 14.0976 16.3612 14.077C16.2648 14.0655 16.1697 14.0576 16.0729 14.0548C16.0655 13.911 15.9362 13.9378 15.867 13.9399C15.6492 13.9461 15.4318 13.9609 15.2131 13.9592C14.9945 13.9576 14.7874 14.0058 14.5749 14.0049C14.0519 14.0049 13.5455 14.1178 13.0361 14.2051C12.8409 14.2388 12.6482 14.2849 12.453 14.3166C12.3147 14.3494 12.1786 14.3906 12.0454 14.4402C11.9877 14.4624 12.0672 14.3772 12.0973 14.3537C12.4028 14.1136 12.7561 13.9498 13.0855 13.7546C13.6307 13.4363 14.201 13.1736 14.7754 12.9224Z"
              fill="#602B78"
            ></path>
            <path
              d="M22.6612 13.0344L22.8589 13.1942C22.828 13.2942 22.7448 13.2436 22.6831 13.2564C22.6386 13.2658 22.5892 13.202 22.5484 13.2654C22.3013 13.3408 22.0337 13.3626 21.8208 13.5327C21.7698 13.566 21.7924 13.5841 21.834 13.5981C22.0506 13.557 22.1634 13.7344 22.3084 13.8328C22.5884 14.0235 22.8556 14.2335 23.1282 14.4357C23.1323 14.4386 23.2031 14.5481 23.267 14.6416C23.3139 14.7107 23.1372 14.6099 23.0689 14.5897C22.7527 14.4962 22.4376 14.399 22.1218 14.3072C21.8875 14.2393 21.6495 14.1837 21.4177 14.11C21.2176 14.0449 21.0224 14.0482 20.8169 14.0766C20.6522 14.0993 20.4809 14.0791 20.3129 14.0766C20.3045 13.9586 20.3412 13.8418 20.4154 13.7497C20.4842 13.6615 20.5513 13.5722 20.6189 13.4833C20.7663 13.2893 20.8791 13.0439 21.0718 12.9158C21.2645 12.7878 21.5355 12.7824 21.7685 12.7099C21.9122 12.6663 22.0251 12.6964 22.1552 12.768C22.3191 12.8635 22.4619 13.0068 22.6612 13.0344Z"
              fill="#602B78"
            ></path>
            <path
              d="M22.8469 15.4976C22.7495 15.4939 22.6546 15.4656 22.5711 15.4153C22.1626 15.2069 21.7533 15.001 21.3461 14.7881C21.274 14.7507 21.2028 14.7231 21.1328 14.7745C21.1081 14.7932 21.0907 14.8197 21.0832 14.8496C21.0757 14.8796 21.0786 14.9112 21.0916 14.9393C21.1216 15.0274 21.1451 15.1176 21.2616 15.1283C21.3522 15.1369 21.4428 15.1501 21.5334 15.16C21.6079 15.1686 21.6779 15.1929 21.7092 15.2637C21.7405 15.3346 21.6911 15.391 21.6454 15.4387C21.5641 15.5235 21.497 15.6209 21.4465 15.727C21.3951 15.8344 21.3209 15.8505 21.2229 15.8283C21.0994 15.7999 20.9759 15.7677 20.8523 15.7369C20.8151 15.7298 20.7798 15.7146 20.7493 15.6921C20.7187 15.6697 20.6935 15.6406 20.6757 15.6071C20.5909 15.4474 20.4513 15.3189 20.4002 15.1386C20.3767 15.0562 20.3257 15.106 20.2997 15.1336C20.2096 15.2296 20.1256 15.3317 20.0395 15.4317C20.0062 15.47 19.9744 15.5096 19.9423 15.5487C19.8666 15.6401 19.7776 15.6936 19.6648 15.6174C19.5878 15.566 19.5791 15.3922 19.6467 15.2921C19.729 15.1736 19.8468 15.1068 19.9761 15.0517C20.429 14.8562 20.882 14.6598 21.3349 14.4624C21.3975 14.4352 21.4535 14.413 21.5235 14.4451C21.9909 14.6605 22.4591 14.873 22.9272 15.0863C23.0446 15.1398 23.0998 15.2386 23.0759 15.3576C23.0524 15.4671 22.9507 15.4951 22.8469 15.4976Z"
              fill="#602B78"
            ></path>
            <path
              d="M12.9912 15.3168C12.689 15.3004 12.4374 15.3679 12.1821 15.3444C12.1409 15.3403 12.0829 15.3642 12.0623 15.3053C12.0392 15.2394 12.0952 15.2209 12.1381 15.1925C12.1832 15.1598 12.2261 15.1242 12.2665 15.0858C12.3455 15.014 12.448 14.9733 12.5548 14.9714C13.1996 14.9396 13.8477 14.9339 14.4872 14.8668C14.8763 14.8256 15.1782 14.9837 15.51 15.0928C15.6407 15.1355 15.7677 15.1888 15.8897 15.2522C16.0544 15.3382 16.1038 15.4692 16.042 15.5993C15.9725 15.7463 15.8905 15.7702 15.732 15.727C15.5153 15.6675 15.3292 15.5281 15.2111 15.337C15.1209 15.2003 14.964 15.1723 14.8298 15.1986C14.6379 15.2332 14.4456 15.2164 14.2533 15.2456C14.0083 15.2827 13.7563 15.2794 13.5072 15.2814C13.3207 15.2827 13.1354 15.3424 12.9912 15.3168Z"
              fill="#763994"
            ></path>
            <path
              d="M22.6612 13.0344C22.4615 13.0068 22.3191 12.8635 22.1531 12.7712C22.023 12.6996 21.9102 12.6695 21.7665 12.7132C21.5334 12.784 21.2616 12.789 21.0697 12.9191C20.8779 13.0492 20.7659 13.2925 20.6168 13.4865C20.5493 13.5754 20.4821 13.6648 20.4134 13.7529C20.3391 13.845 20.3025 13.9618 20.3108 14.0799C20.0893 14.1025 19.8674 14.1243 19.6463 14.149C19.5404 14.1606 19.5042 14.1297 19.5141 14.0136C19.5281 13.8439 19.645 13.7616 19.7578 13.6706C20.2746 13.2534 20.7934 12.8396 21.3082 12.4196C21.514 12.2549 21.6302 12.2425 21.841 12.4044C22.1155 12.6133 22.3889 12.8233 22.6612 13.0344Z"
              fill="#723190"
            ></path>
            <path
              d="M22.5484 13.2654C22.5896 13.202 22.6386 13.2654 22.6831 13.2563C22.7448 13.2436 22.828 13.2942 22.8589 13.1942C22.975 13.2765 23.094 13.3527 23.2064 13.4387C23.2764 13.4923 23.2604 13.5878 23.2888 13.6619C23.3192 13.737 23.3454 13.8137 23.3674 13.8917C23.3806 13.9366 23.3847 13.9901 23.3308 14.0103C23.2768 14.0305 23.2674 13.9773 23.2431 13.9456C23.0717 13.7254 22.8851 13.5175 22.6847 13.3234C22.647 13.2894 22.599 13.269 22.5484 13.2654V13.2654Z"
              fill="#763994"
            ></path>
            <path
              d="M21.834 13.5981C21.7929 13.5841 21.7698 13.566 21.8208 13.5326C21.825 13.5544 21.8295 13.5763 21.834 13.5981Z"
              fill="#723190"
            ></path>
            <path
              d="M12.5543 23.3946C12.4308 23.5778 12.3587 23.7771 12.2089 23.9365C12.1644 23.9834 12.0499 24.0427 12.003 24.0188C11.4067 23.7153 10.829 23.4979 10.2324 23.1953C10.1533 23.1541 9.98529 23.0586 9.94411 22.9894C9.5974 22.4071 9.29393 21.9299 8.95586 21.3423C8.83027 21.1241 8.6915 20.7176 8.62644 20.4776C8.51691 20.0745 8.44938 19.7273 8.3382 19.3246C8.2855 19.134 8.10473 18.9796 8.09114 18.7893C8.04831 18.1037 8.04831 17.4161 8.09114 16.7305C8.10638 16.4867 8.3382 16.0931 8.35797 15.8497C8.5408 16.0494 8.65856 16.2936 8.8068 16.5168C9.06869 16.9104 9.31369 17.3152 9.57805 17.7072C9.67399 17.8501 9.83788 17.9308 9.97005 18.0407C10.0697 18.1231 10.1121 18.1877 10.1113 18.3504C10.1076 18.9355 10.0063 19.5285 10.2389 20.1049C10.416 20.5431 10.5375 21.003 10.682 21.4539C10.7063 21.5319 10.7496 21.6026 10.808 21.6598C11.3408 22.1888 11.8723 22.7194 12.4024 23.2517C12.4518 23.2994 12.5037 23.3464 12.5543 23.3946Z"
              fill="#723190"
            ></path>
            <path
              d="M9.73824 3.01847C10.3279 2.64417 10.8826 2.32875 11.4677 1.94786C11.7024 1.7951 12.0355 1.65962 12.2912 1.57727C12.67 1.45786 13.0217 1.40021 13.403 1.28903C13.5109 1.25773 13.8333 1.48133 13.9383 1.53609C14.3464 1.74815 14.6383 1.82433 15.0501 2.03022C15.0978 2.05451 15.0501 2.26122 15.0686 2.32546C14.887 2.34399 14.7203 2.26863 14.5473 2.2361C14.1887 2.16816 14.1285 2.15704 13.7736 2.07139C13.6632 2.04463 13.0938 1.99933 12.9912 2.03022C12.4312 2.19822 12.3991 2.2361 11.8383 2.40081C11.7884 2.41563 11.1354 2.77676 11.0971 2.81258C10.7706 3.11976 10.6993 3.20747 10.3736 3.51547C10.255 3.62747 10.1471 3.75059 10.0125 3.84489C9.86466 3.94866 9.72424 4.45143 9.69707 4.62437C9.61471 5.1395 9.59412 5.29762 9.52906 5.8148C9.4813 6.19322 9.50271 6.57863 9.52536 6.96117C9.53251 6.99587 9.53787 7.03091 9.54142 7.06617C9.52412 7.51006 9.57271 7.95271 9.5723 8.39619C9.5723 8.86519 9.62377 9.33297 9.60565 9.8028C9.60457 9.89863 9.5783 9.9925 9.52948 10.075C9.3273 10.4167 9.13788 10.7663 8.94311 11.1122C8.91104 11.1705 8.89525 11.2364 8.89741 11.3029C8.89988 11.5582 8.89288 11.8139 8.89947 12.0696C8.91429 12.6259 8.855 13.1814 8.86282 13.7368C8.86611 13.9497 8.76852 14.1515 8.71211 14.3566C8.61287 14.7173 8.53546 15.0842 8.40493 15.4362C8.39335 15.4225 8.38488 15.4065 8.38012 15.3892C8.37535 15.372 8.37441 15.3538 8.37734 15.3362C8.39011 14.7329 7.99398 14.1552 7.92645 13.5598C7.87004 13.0657 7.90957 12.6539 7.8441 12.1598C7.77245 11.6204 7.69257 10.9319 7.67939 10.3892C7.66457 9.78385 7.60157 9.26626 7.67939 8.65972C7.70475 8.46857 7.7185 8.27606 7.72057 8.08324C7.71192 7.26423 7.87457 6.40857 8.00881 5.61262C8.0681 5.26261 8.34893 4.7829 8.54411 4.50084L9.73824 3.01847Z"
              fill="#723190"
            ></path>
            <path
              d="M23.6973 24.1423C23.4605 24.2341 23.2196 24.3268 22.9647 24.3309C22.6238 24.3367 22.2824 24.3206 21.9423 24.3004C21.8923 24.2931 21.8413 24.3029 21.7975 24.3283C21.7538 24.3536 21.7199 24.393 21.7014 24.44C21.4807 24.893 21.2098 25.3179 20.9417 25.7437C20.6876 26.1476 20.4356 26.5528 20.182 26.9568C20.1644 26.9819 20.1443 27.0051 20.1219 27.0259C19.5783 27.5799 19.0351 28.1339 18.4921 28.6878C18.4643 28.7225 18.4268 28.7482 18.3845 28.7615C18.3421 28.7749 18.2967 28.7753 18.2541 28.7628C17.6796 28.6467 17.1011 28.5569 16.5246 28.4412C16.2751 28.3918 16.0478 28.2683 15.8147 28.1678C15.3243 27.9565 14.8174 27.7803 14.3468 27.5275C13.7291 27.1981 13.1053 26.8686 12.5136 26.4923C12.0404 26.1913 11.611 25.8219 11.1638 25.481C11.0102 25.364 10.052 24.473 9.90212 24.3124C9.51918 23.8969 9.11976 23.495 8.76111 23.0606C8.54658 22.8004 8.39298 22.4899 8.21551 22.1996C8.10186 22.0139 7.97298 21.8368 7.8861 21.6346C7.93098 21.5893 7.88857 21.5469 7.87663 21.5078C7.76751 21.1417 7.65509 20.7765 7.54309 20.4113C7.48256 20.2124 7.4558 20.1844 7.26803 20.0991C6.70267 19.8426 6.14225 19.5791 5.57277 19.332C5.54927 19.3232 5.52721 19.311 5.5073 19.2958C5.48472 19.2745 5.46605 19.2494 5.45212 19.2217C5.29153 18.9421 5.12641 18.6658 4.96294 18.3878C4.77599 18.071 4.58891 17.7544 4.40169 17.4379C4.37604 17.4061 4.36041 17.3674 4.35681 17.3267C4.37328 16.8634 4.37205 16.399 4.37864 15.9349C4.38975 15.1632 4.41611 14.392 4.43834 13.6203C4.43599 13.5291 4.44993 13.4382 4.47952 13.3519C4.5211 13.2645 4.57912 13.1859 4.6504 13.1204C4.80811 12.9557 4.96541 12.7943 5.12888 12.6354C5.1591 12.609 5.18483 12.5778 5.20506 12.5431C5.22806 12.4853 5.23682 12.4227 5.23059 12.3607C5.22318 11.8666 5.29894 11.3704 5.3673 10.8821C5.42 10.5115 5.43977 10.1372 5.497 9.76781C5.54106 9.4841 5.61806 9.20492 5.68436 8.92451C5.77412 8.54485 5.84907 8.16108 5.96395 7.78884C6.1056 7.32848 6.27978 6.87759 6.44161 6.423C6.49966 6.26035 6.55978 6.09811 6.62361 5.93752C6.81055 5.4681 7.08232 5.04439 7.34173 4.61368C7.5118 4.33121 7.69092 4.05367 7.85686 3.7679C7.94127 3.62255 8.06563 3.51755 8.18134 3.4039C8.46875 3.1195 8.75946 2.84005 9.05346 2.56553C9.29064 2.34277 9.53277 2.12494 9.7753 1.9067C9.82281 1.86811 9.87513 1.83586 9.93095 1.81076C10.4564 1.54969 10.9822 1.28891 11.5084 1.02839C11.6369 0.964981 11.7765 0.93698 11.914 0.900745C12.4915 0.752938 13.0776 0.641269 13.669 0.566387C14.0289 0.52077 14.3934 0.524372 14.7524 0.577093C14.8387 0.587598 14.9259 0.589667 15.0126 0.583269C15.5236 0.554446 16.026 0.624447 16.5275 0.709683C16.9216 0.775978 17.3214 0.817979 17.7072 0.915568C18.2582 1.0531 18.796 1.24499 19.3457 1.38581C19.6434 1.46281 19.8484 1.6617 20.0741 1.83876C20.5053 2.17586 20.934 2.5164 21.36 2.86036C21.4893 2.96454 21.6372 3.05225 21.7208 3.20625C21.7364 3.23548 21.7813 3.25772 21.7471 3.29643C21.7183 3.32896 21.6837 3.30672 21.6487 3.29643C21.4066 3.22025 21.2106 3.06048 20.9969 2.93489C20.5769 2.68783 20.168 2.421 19.7525 2.16653C19.68 2.12994 19.6047 2.09924 19.5273 2.0747C19.5141 2.19823 19.4754 2.30735 19.4816 2.42471C19.4988 2.74589 19.4486 3.06501 19.4453 3.38619C19.4453 3.59455 19.2847 4.1422 19.209 4.33574C19.0352 4.78086 18.7972 5.15928 18.6325 5.15928C18.3775 5.14936 18.1265 5.09356 17.8913 4.99457C17.2909 4.67009 17.3527 4.71498 16.7532 4.38844C16.6296 4.32132 16.581 4.17926 16.5012 4.06973C16.1102 3.53361 15.7226 2.99419 15.3383 2.45147C15.2696 2.35429 15.151 2.38188 15.0682 2.32547C15.0501 2.26123 14.9265 2.18712 14.8854 2.15376C14.5848 1.91452 14.5259 1.92317 14.103 1.74199C13.8148 1.61846 12.8747 1.68558 12.6206 1.74199C12.25 1.82435 11.7403 2.04094 11.492 2.17023C10.8912 2.48318 9.90295 3.01848 9.58712 3.43519C9.2577 3.87002 8.98017 4.34109 8.66969 4.79074C8.47493 5.07239 8.32175 5.36104 8.26245 5.71146C8.12822 6.507 7.90092 7.28731 7.90957 8.10632C7.91228 8.27914 7.90306 8.45195 7.88198 8.6235C7.80457 9.23045 7.8791 9.83576 7.89392 10.4411C7.91222 10.9843 7.95978 11.5261 8.03639 12.0643C8.10186 12.5584 8.14098 13.0525 8.19698 13.5466C8.23487 13.8798 8.29087 14.2104 8.3304 14.5435C8.35057 14.7128 8.36663 14.8824 8.37404 15.0525C8.38022 15.2036 8.40163 15.3654 8.3901 15.5157C8.38557 15.5738 8.37322 15.6306 8.36498 15.6883C8.35414 15.7734 8.34782 15.859 8.34604 15.9448C8.34604 16.3627 8.29869 16.7782 8.31475 17.1962C8.33204 17.6372 8.38475 18.0757 8.41563 18.5138C8.42881 18.7041 8.42016 18.8988 8.47287 19.0903C8.58363 19.4926 8.67299 19.9015 8.78211 20.3046C8.84758 20.5447 8.86117 20.8037 8.98799 21.0215C9.32565 21.6091 9.67647 22.1893 10.0236 22.7715C10.0648 22.8407 10.0961 22.9181 10.1751 22.9581C10.7719 23.26 11.3683 23.5634 11.9643 23.8681C12.0112 23.892 12.0598 23.915 12.1043 23.8681C12.2546 23.7087 12.4312 23.5749 12.5572 23.3917C12.8706 23.0277 13.4174 22.6402 13.6241 22.3108C13.6402 22.2856 14.0211 21.9879 14.1796 21.85C14.2652 21.7755 15.2708 21.0923 15.6471 20.8642C15.7327 20.818 15.8298 20.7974 15.9267 20.8049C15.9745 20.8486 16.0334 20.8333 16.0877 20.8313C16.5502 20.8164 17.0113 20.7728 17.4746 20.7687C17.6035 20.7687 17.7295 20.8362 17.8641 20.7872C17.8398 20.7263 17.7838 20.7197 17.7406 20.6983C17.4264 20.5389 17.1089 20.3861 16.7976 20.2214C16.7075 20.1737 16.574 20.0979 16.6177 19.9896C16.6589 19.8879 16.7972 19.9418 16.8923 19.9649C17.2629 20.0551 17.6306 20.1621 18.0041 20.2371C18.2318 20.2828 18.3838 20.4018 18.5221 20.578C18.6086 20.6876 18.6868 20.8325 18.8614 20.8362C19.0776 20.926 19.3144 20.9383 19.5351 21.012C19.8324 21.1109 20.1391 21.1821 20.441 21.2677C20.4993 21.2868 20.5501 21.3236 20.5863 21.3732C20.8717 21.7219 21.1628 22.067 21.451 22.4141C21.6545 22.6612 21.8575 22.9062 22.0576 23.1553C22.0893 23.1965 22.4171 23.5354 22.4475 23.5671C22.5039 23.628 22.5595 23.7054 22.646 23.7289C22.9977 23.824 23.3176 24.0213 23.689 24.0542C23.7071 24.0542 23.7302 24.0509 23.7376 24.0789C23.7396 24.0857 23.74 24.0929 23.739 24.0999C23.738 24.107 23.7355 24.1137 23.7317 24.1197C23.7279 24.1257 23.7228 24.1308 23.7169 24.1347C23.711 24.1386 23.7043 24.1412 23.6973 24.1423V24.1423Z"
              fill="#460B5F"
            ></path>
            <path
              d="M21.2048 24.1452C21.1982 24.2243 21.092 24.2341 21.0261 24.2646C20.6143 24.4557 20.1795 24.55 19.7335 24.6097C19.5725 24.6311 19.4123 24.6607 19.253 24.692C19.1455 24.7126 19.0496 24.7073 18.9779 24.6097C18.975 24.6056 18.9701 24.6027 18.9672 24.5986C18.6201 24.0501 18.0889 24.1172 17.5557 24.167C17.3112 24.1878 17.0655 24.1904 16.8207 24.1749C16.5398 24.1592 16.2907 24.2692 16.0325 24.3424C15.6059 24.4635 15.1806 24.5895 14.7589 24.7279C14.5876 24.7839 14.4246 24.741 14.2603 24.725C13.9572 24.6957 13.6558 24.6492 13.3544 24.6052C13.2815 24.5949 13.1798 24.5945 13.1584 24.5179C13.1419 24.4598 13.2407 24.4404 13.2885 24.41C14.0202 23.9356 14.6918 23.3805 15.3914 22.8621C15.5681 22.7316 15.7686 22.6908 15.9724 22.6468C16.4299 22.5479 16.8886 22.4541 17.3444 22.3466C17.5067 22.3083 17.6673 22.3083 17.8769 22.3054C18.2182 22.2206 18.4871 22.4886 18.7906 22.6402C19.1554 22.8222 19.5005 23.0429 19.8612 23.2286C20.2639 23.4345 20.6048 23.7289 20.9795 23.9743C21.0055 23.9903 21.03 24.0085 21.0528 24.0287C21.1031 24.076 21.2093 24.09 21.2048 24.1452Z"
              fill="#682587"
            ></path>
            <path
              d="M7.66579 19.5815C7.6303 19.6068 7.58875 19.6223 7.54536 19.6263C7.50197 19.6304 7.45828 19.6229 7.41873 19.6046C7.05143 19.4149 6.68427 19.2247 6.31724 19.0339C6.19042 18.968 6.07018 18.8885 5.93677 18.837C5.77783 18.7753 5.68394 18.6608 5.60735 18.5179C5.30635 17.962 5.00082 17.4082 4.70146 16.8515C4.61087 16.6835 4.68911 16.5097 4.71011 16.3421C4.76981 15.8632 4.84187 15.3864 4.91228 14.9092C4.96087 14.5773 5.0144 14.2462 5.06588 13.9152C5.06958 13.8929 5.18941 13.0916 5.22399 13.0607C5.27631 13.0137 5.34214 12.9844 5.41209 12.977C5.48204 12.9696 5.55254 12.9845 5.61353 13.0196C6.10518 13.3292 6.59697 13.639 7.0889 13.9489C7.12427 13.968 7.15496 13.9947 7.17874 14.0271C7.20252 14.0595 7.21881 14.0968 7.22643 14.1363C7.27708 14.3854 7.34173 14.6304 7.39485 14.8548C7.39485 15.0607 7.18896 15.2563 7.00737 15.2472C6.99849 15.2482 6.98951 15.2472 6.98102 15.2444C6.97252 15.2417 6.96471 15.2372 6.95807 15.2312C6.95143 15.2252 6.94612 15.2179 6.94249 15.2097C6.93885 15.2016 6.93697 15.1928 6.93696 15.1838C6.89372 14.7955 6.63307 14.5427 6.3823 14.2808C6.08583 13.972 5.79635 13.6562 5.50441 13.3432C5.47476 13.3115 5.40559 13.4585 5.32941 13.6269H5.34423C5.41563 13.6189 5.48743 13.6379 5.54559 13.68C5.60389 13.7212 5.65367 13.7732 5.69218 13.8332C5.90424 14.1626 6.17807 14.4472 6.42142 14.7543C6.57378 14.9462 6.51531 15.1414 6.27854 15.2188C6.12815 15.267 5.9753 15.3071 5.82065 15.3391C5.66706 15.3716 5.58553 15.4589 5.54847 15.6108C5.5219 15.7358 5.51509 15.8642 5.52829 15.9913C5.53735 16.1231 5.60035 16.1601 5.72471 16.1099C5.97177 16.0098 6.18136 15.8414 6.41689 15.7195C6.48648 15.6833 6.51778 15.6549 6.60137 15.7294C6.70678 15.8233 6.86119 15.8653 6.99749 15.9221C7.18896 16.0012 7.27873 16.1535 7.23508 16.3582C7.17949 16.6172 7.11361 16.8737 7.0609 17.1331C7.04443 17.213 7.01561 17.2073 6.95796 17.1805C6.83443 17.1224 6.81549 17.0018 6.78543 16.8923C6.76278 16.8074 6.74425 16.7251 6.67425 16.6629C6.60425 16.6007 6.54166 16.518 6.43872 16.5534C6.32424 16.5945 6.35636 16.7033 6.34442 16.7938C6.40829 17.1182 6.50117 17.4361 6.62195 17.7438C6.6398 17.7914 6.66141 17.8376 6.6866 17.8817C6.72778 17.9563 6.78707 18.0016 6.87437 17.9526C6.96166 17.9036 6.9979 17.885 7.04608 18.0176C7.09014 18.1412 7.20378 18.2618 7.31661 18.3413C7.59208 18.536 7.59414 18.8309 7.64026 19.1133C7.65549 19.2089 7.66208 19.3056 7.68144 19.4016C7.69173 19.4633 7.73209 19.5416 7.66579 19.5815Z"
              fill="#682587"
            ></path>
            <path
              d="M19.5894 23.5922C19.5817 23.6052 19.5701 23.6156 19.5562 23.6218C19.5424 23.628 19.5269 23.6297 19.512 23.6267C18.9965 23.6045 18.4826 23.6803 17.9683 23.6556C17.6125 23.6383 17.2654 23.5506 16.915 23.4909C16.6395 23.4452 16.3657 23.3867 16.0886 23.3537C15.8621 23.3266 15.6941 23.1643 15.4779 23.1199C15.4729 23.1187 15.4682 23.1164 15.4641 23.1133C15.46 23.1101 15.4567 23.1061 15.4543 23.1015C15.4519 23.097 15.4505 23.0919 15.4503 23.0868C15.45 23.0816 15.4509 23.0765 15.4528 23.0717C15.4651 23.0412 15.494 23.0449 15.5178 23.0482C15.7649 23.0811 16.012 23.1178 16.257 23.1487C16.6498 23.1973 17.043 23.2417 17.4359 23.2887C17.7927 23.3321 18.1504 23.3757 18.5089 23.4196C18.8112 23.4571 19.1126 23.497 19.4148 23.5333C19.4777 23.5347 19.5386 23.5552 19.5894 23.5922V23.5922Z"
              fill="#602B78"
            ></path>
          </svg>
          <h2>Bonjour {user ? user.email : null}👋</h2>
        </div>
        <div className="section">
          <h2>👍 Bons plans</h2>
          <div className="cartes">
            <h3>Carte Jeune Bordeaux Métropole</h3>
            <p>L'outil pour vous accompagner dans toutes vos sorties !</p>
          </div>
        </div>
        <div className="section">
          <h2>🎉 Evenements BDE</h2>
          <div className="cartes">
            <h3>Calendrier de l'Avent 🎄</h3>
            <p>Mercredi 15 décembre</p>
            <p>Loup-Garou géant</p>
          </div>
          <div className="cartes">
            <h3>Calendrier de l'Avent 🎄</h3>
            <p>Mercredi 16 décembre</p>
            <p>Bal de Noel</p>
          </div>
        </div>
        <div className="section covoit-section">
          <h2>🚗 En voiture Michel !</h2>
          <Link to="/covoit" >
            <div className="cartes-bouton">Proposer un covoit</div>
          </Link>
        </div>
        <div className="section">
          <h2>🗞️ Actualités du BDE</h2>
          <div className="cartes">
            <h3>Social</h3>
            <p>
              Merci au club Inner Wheel Bordeaux Alienor Europea de nous avoir
              offert, ce mardi 9 Novembre, un chèque de 1000 euros pour
              permettre à notre association d’aider les étudiants en situation
              de précarité.
            </p>
          </div>
        </div>
      </div>

      {/* {ads.map((ad, index) => (
        <div key={index} className="ad">
          <div className="infos">
            <span className="date-start">
              {new Date(ad.when.seconds).getHours()}
            </span>
            <div className="point point-start"></div>
            <span className="start">{ad.start}</span>
            <span className="duration">1h00</span>
            <div className="line-container">
              <div className="line" />
            </div>
            <span className="date-finish">1:00</span>
            <div className="point point-end"></div>
            <span className="finish">{ad.finish}</span>
          </div>
          <span className="date">
            {new Date(ad.when.seconds).getTime()} {ad.when.seconds}
          </span>
          <span className="user">Michel</span>
          <span className="price">{ad.price}</span>
        </div>
      ))}
    */}
    </>
  )
}
