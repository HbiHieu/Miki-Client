import Button from '../../../Components/Button';
import { motion } from 'framer-motion';
import Animation from '../../../Components/animations/Animation';
import { BOTTOM_TOP, LEFT_RIGHT, SCALE_ZOOM } from '../../../Components/animations';
import { Link } from 'react-router-dom';

export function AboutSection() {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="relative mx-[152px] mt-[120px] h-[537px]">
        <Animation scroll variant={LEFT_RIGHT}>
          <p className="text-[32px] leading-[39px] font-bold absolute left-[1px] top-[0px] w-[214px] h-[39px]">
            Về chúng tôi
          </p>
          <p className="font-playfair text-[48px] leading-[57.6px] absolute left-[2px] top-[95px] font-bold w-[554px] h-[114px]">
            “Ngày mai phải tốt hơn ngày hôm nay”
          </p>
          <p className="text-base absolute top-[241px] left-[4px] w-[544px] h-[60px] text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
            <br />
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </Animation>
        <Animation className={'z-50 absolute min-w-full'} scroll variant={BOTTOM_TOP}>
          <Link to="/about">
            <Button
              title={'Tìm hiểu thêm'}
              className={
                'absolute left-[0px] top-[400px] py-2 px-[46px] bg-btn text-white font-bold rounded-btnB hover:bg-[#0000] hover:text-neutral_1 hover:border-solid hover:border-[1px] hover:border-[#000] z-[1000]'
              }
            />
          </Link>
        </Animation>
        {/* circle border-style  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[269px] right-[863px] z-[20]"
          width="370"
          height="833"
          viewBox="0 0 370 833"
          fill="none"
        >
          <circle
            cx="-46.5"
            cy="416.5"
            r="416"
            stroke="#B78D71"
            strokeOpacity="0.5"
            strokeDasharray="25 25"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[403px] right-[996px] z-[10]"
          width="237"
          height="566"
          viewBox="0 0 237 566"
          fill="none"
        >
          <path
            d="M234.591 245.973C235.655 254.087 236.374 262.308 236.733 270.622L236.234 270.643C236.411 274.74 236.5 278.86 236.5 283C236.5 287.14 236.411 291.26 236.234 295.357L236.733 295.378C236.374 303.692 235.655 311.913 234.591 320.026L234.095 319.961C233.017 328.182 231.585 336.291 229.813 344.274L230.301 344.382C228.505 352.478 226.36 360.444 223.884 368.263L223.407 368.112C220.91 375.996 218.076 383.731 214.921 391.3L215.382 391.492C212.198 399.13 208.687 406.6 204.868 413.883L204.425 413.651C200.593 420.959 196.449 428.079 192.011 434.994L192.432 435.264C187.971 442.214 183.214 448.958 178.178 455.477L177.782 455.171C172.746 461.691 167.43 467.985 161.853 474.036L162.22 474.375C156.631 480.44 150.779 486.26 144.684 491.82L144.347 491.45C138.268 496.994 131.947 502.277 125.399 507.281L125.703 507.679C119.161 512.68 112.394 517.404 105.419 521.832L105.151 521.41C98.2173 525.813 91.0783 529.924 83.7517 533.726L83.982 534.17C76.6842 537.957 69.2007 541.437 61.5486 544.593L61.3579 544.131C53.7786 547.257 46.0336 550.066 38.1398 552.539L38.2893 553.016C30.4642 555.468 22.4931 557.592 14.3922 559.37L14.285 558.882C6.29938 560.636 -1.81262 562.054 -10.0354 563.12L-9.97104 563.616C-18.0852 564.669 -26.3069 565.381 -34.6213 565.736L-34.6427 565.236C-38.7398 565.412 -42.8595 565.5 -47 565.5C-51.1405 565.5 -55.2602 565.412 -59.3574 565.236L-59.3788 565.736C-67.6931 565.381 -75.9149 564.669 -84.029 563.616L-83.9647 563.12C-92.1874 562.054 -100.299 560.636 -108.285 558.882L-108.392 559.37C-116.493 557.592 -124.464 555.468 -132.289 553.016L-132.14 552.539C-140.034 550.066 -147.779 547.257 -155.358 544.131L-155.549 544.593C-163.201 541.437 -170.684 537.957 -177.982 534.17L-177.752 533.726C-185.078 529.924 -192.217 525.813 -199.151 521.41L-199.419 521.832C-206.394 517.404 -213.161 512.68 -219.703 507.679L-219.399 507.281C-225.947 502.277 -232.268 496.994 -238.347 491.45L-238.684 491.82C-244.779 486.26 -250.631 480.44 -256.22 474.375L-255.853 474.036C-261.43 467.985 -266.746 461.691 -271.782 455.171L-272.178 455.477C-277.214 448.958 -281.971 442.214 -286.432 435.264L-286.011 434.994C-290.449 428.079 -294.593 420.959 -298.425 413.651L-298.868 413.883C-302.687 406.6 -306.198 399.13 -309.382 391.492L-308.921 391.3C-312.076 383.731 -314.91 375.996 -317.407 368.112L-317.884 368.263C-320.36 360.444 -322.505 352.478 -324.301 344.382L-323.813 344.274C-325.585 336.292 -327.017 328.182 -328.095 319.962L-328.591 320.027C-329.655 311.914 -330.374 303.692 -330.733 295.378L-330.234 295.357C-330.411 291.26 -330.5 287.14 -330.5 283C-330.5 278.86 -330.411 274.74 -330.234 270.643L-330.733 270.622C-330.374 262.308 -329.655 254.087 -328.591 245.974L-328.095 246.039C-327.017 237.818 -325.585 229.709 -323.813 221.726L-324.301 221.618C-322.505 213.522 -320.36 205.556 -317.884 197.737L-317.407 197.888C-314.91 190.004 -312.076 182.269 -308.921 174.7L-309.382 174.508C-306.198 166.87 -302.687 159.4 -298.868 152.117L-298.425 152.349C-294.593 145.041 -290.449 137.921 -286.011 131.006L-286.432 130.736C-281.971 123.786 -277.214 117.042 -272.178 110.523L-271.782 110.829C-266.746 104.309 -261.43 98.0149 -255.853 91.9637L-256.22 91.6248C-250.631 85.5604 -244.779 79.7396 -238.684 74.1804L-238.347 74.5499C-232.268 69.0063 -225.947 63.7233 -219.399 58.7186L-219.703 58.3213C-213.161 53.3202 -206.394 48.5965 -199.419 44.1678L-199.151 44.5899C-192.217 40.1866 -185.078 36.0755 -177.752 32.2739L-177.982 31.8301C-170.684 28.0434 -163.201 24.5633 -155.549 21.4068L-155.358 21.8691C-147.779 18.7426 -140.034 15.9343 -132.14 13.4609L-132.289 12.9838C-124.464 10.5319 -116.493 8.4084 -108.392 6.62958L-108.285 7.11795C-100.299 5.36444 -92.1874 3.94643 -83.9646 2.87952L-84.029 2.38368C-75.9148 1.33085 -67.693 0.619312 -59.3786 0.263993L-59.3573 0.763537C-55.2602 0.588444 -51.1405 0.5 -47 0.5C-42.8595 0.5 -38.7398 0.588446 -34.6426 0.763542L-34.6212 0.263998C-26.3069 0.619321 -18.0851 1.33086 -9.97092 2.38369L-10.0352 2.87953C-1.81253 3.94645 6.29947 5.36446 14.2851 7.11797L14.3923 6.6296C22.4932 8.40842 30.4643 10.5319 38.2893 12.9838L38.1399 13.4609C46.0337 15.9344 53.7787 18.7427 61.358 21.8691L61.5487 21.4069C69.2008 24.5633 76.6843 28.0434 83.9821 31.8301L83.7518 32.2739C91.0783 36.0755 98.2173 40.1866 105.151 44.5899L105.419 44.1678C112.394 48.5965 119.161 53.3203 125.703 58.3214L125.399 58.7186C131.947 63.7233 138.268 69.0063 144.347 74.5499L144.684 74.1804C150.779 79.7396 156.631 85.5604 162.22 91.6248L161.853 91.9637C167.43 98.0149 172.746 104.309 177.782 110.829L178.178 110.523C183.214 117.042 187.971 123.786 192.432 130.736L192.011 131.006C196.449 137.921 200.593 145.041 204.425 152.349L204.868 152.117C208.687 159.4 212.198 166.87 215.382 174.508L214.921 174.7C218.076 182.269 220.91 190.004 223.407 197.888L223.884 197.737C226.36 205.556 228.505 213.522 230.301 221.618L229.813 221.726C231.585 229.709 233.017 237.818 234.095 246.038L234.591 245.973Z"
            stroke="#B78D71"
            strokeOpacity="0.5"
            strokeDasharray="25 25"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[563px] right-[1157px]"
          width="76"
          height="246"
          viewBox="0 0 76 246"
          fill="none"
        >
          <circle
            cx="-47"
            cy="123"
            r="122.5"
            stroke="#B78D71"
            strokeOpacity="0.5"
            strokeDasharray="25 25"
          />
        </svg>
        {/* circle none boder-style */}
        <div className="absolute w-[833px] h-[833px] rounded-full bg-circle1 left-[1008px] top-[-117px] z-[2]"></div>

        <div className="absolute w-[1041px] h-[1041px] rounded-full bg-circle2 left-[904px] top-[-221px] z-[1]"></div>

        <Animation scroll variant={SCALE_ZOOM}>
          <div className="w-[548px] bg-[url('/assets/images/aboutsection.jpg')] rounded-imgB bg-cover bg-center bg-no-repeat absolute left-[558px] top-[0] h-[537px] z-[3] shadow-md"></div>
        </Animation>
      </div>
    </motion.section>
  );
}
