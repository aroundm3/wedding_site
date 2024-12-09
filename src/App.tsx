import "./App.css";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="relative w-full h-[4482px] bg-[#ede1d5] overflow-hidden">
        <div className="absolute w-[343px] h-[77px] top-[596px] right-1/2 translate-x-1/2">
          <div className="absolute w-[343px] -top-px left-0 [font-family:'Noto_Serif',Helvetica] font-normal text-[#67695b] text-xl text-center tracking-[2.00px] leading-[normal]">
            WE’RE GETTING MARRIED!
          </div>

          <p className="absolute w-[343px] top-9 left-0 [font-family:'Noto_Serif',Helvetica] font-normal text-[#67695b] text-[10px] text-center tracking-[1.00px] leading-5">
            “Những điều đẹp đẽ sẽ không thể nhìn thấy bằng mắt thường, mà phải
            cảm nhận bằng trái tim”
          </p>
        </div>

        <div className="absolute w-[327px] top-[1419px] left-6 [font-family:'Noto_Serif',Helvetica] font-normal text-[#67695b] text-sm text-center tracking-[1.40px] leading-[normal]">
          Thân mời
        </div>

        <div className="absolute w-full h-[632px] top-[726px] left-0">
          <div className="absolute w-full h-[280px] top-0 left-0">
            <img
              className="left-0 object-cover absolute w-1/2 h-[280px] top-0"
              alt="Beo"
              src="https://c.animaapp.com/D4mYxIxt/img/-beo5037-1-2@2x.png"
            />

            <div className="absolute w-1/2 h-[280px] top-0 right-0">
              <div className="relative w-full h-[280px] bg-[#67695b]">
                <div className="absolute w-full h-[170px] right-1/2 translate-x-1/2 top-[46px]">
                  <img
                    className="object-cover absolute w-2/3 h-[170px] right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2"
                    alt="Beo"
                    src="https://c.animaapp.com/D4mYxIxt/img/-beo5750-1-2@2x.png"
                  />

                  <div className="absolute -top-3 left-[6%] font-extralight text-sm tracking-[1.68px] [font-family:'Noto_Serif',Helvetica] text-[#f4efe9] text-center leading-[normal]">
                    CÔ DÂU
                  </div>
                </div>

                <div className="absolute w-full top-[229px] right-1/2 translate-x-1/2 [font-family:'Alex_Brush',Helvetica] font-normal text-[#f4efe9] text-xl text-center tracking-[0.80px] leading-[normal]">
                  Trần Phương Anh
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-full h-[280px] top-[352px] left-0">
            <img
              className="left-[188px] absolute w-[187px] h-[280px] top-0"
              alt="Beo"
              src="https://c.animaapp.com/D4mYxIxt/img/-beo5037-1-3@2x.png"
            />

            <div className="absolute w-[188px] h-[280px] top-0 left-0 bg-[#67695b]">
              <div className="absolute w-[133px] h-[183px] top-[33px] left-[39px]">
                <img
                  className="top-[13px] left-0 absolute w-[113px] h-[170px]"
                  alt="Beo"
                  src="https://c.animaapp.com/D4mYxIxt/img/-beo5750-1-3@2x.png"
                />

                <div className="absolute top-0 left-[75px] font-extralight text-sm tracking-[1.68px] [font-family:'Noto_Serif',Helvetica] text-[#f4efe9] text-center leading-[normal]">
                  CHÚ RỂ
                </div>
              </div>

              <div className="absolute top-[228px] left-8 [font-family:'Alex_Brush',Helvetica] font-normal text-[#f4efe9] text-xl text-center tracking-[0.80px] leading-[normal]">
                Trần Tuấn Lâm
              </div>
            </div>
          </div>

          <img
            className="top-[260px] left-[130px] absolute w-[122px] h-[121px] object-cover"
            alt="Decorate flower"
            src="https://c.animaapp.com/D4mYxIxt/img/decorate-flower-1-2@2x.png"
          />
        </div>

        <div className="absolute w-full h-[578px] top-0 flex flex-col">
          <img
            className="absolute w-full h-[564px] top-0 object-cover"
            alt="Beo"
            src="/assets/images/corver_bg_1_3x.webp"
          />

          <div className="absolute w-full h-[261px] top-[317px] left-0 bg-[#443d214c] rounded-[233px/130.5px] blur-[100px]" />

          <div className="inline-flex items-center justify-center gap-5 absolute top-7 right-1/2 translate-x-1/2">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Bodoni_Moda',Helvetica] font-normal text-[#ede1d5] text-4xl text-right tracking-[1.44px] leading-[normal]">
              SAVE
            </div>

            <div className="relative w-9 h-[38px]">
              <div className="absolute w-12 -top-1.5 left-0 [font-family:'Lavishly_Yours',Helvetica] font-normal text-[#ede1d5] text-4xl tracking-[1.44px] leading-10">
                our
              </div>
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Bodoni_Moda',Helvetica] font-normal text-[#ede1d5] text-4xl text-right tracking-[1.44px] leading-[normal]">
              DATE
            </div>
          </div>

          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[375px]">
            <div className="absolute top-[395px] right-1/2 translate-x-1/2 [font-family:'Bodoni_Moda',Helvetica] font-normal text-[#ede1d5] text-base text-right tracking-[0.64px] leading-[normal]">
              &amp;
            </div>

            <div className="absolute top-[357px] left-[46px] [font-family:'Cormorant_Upright',Helvetica] font-semibold text-[#ede1d5] text-[28px] text-center tracking-[2.80px] leading-[normal]">
              TUẤN LÂM
            </div>

            <div className="absolute top-[424px] right-[46px] [font-family:'Cormorant_Upright',Helvetica] font-semibold text-[#ede1d5] text-[28px] text-center tracking-[2.80px] leading-[normal]">
              PHƯƠNG ANH
            </div>
          </div>

          <div className="absolute w-[170px] h-10 top-[480px] right-1/2 translate-x-1/2">
            <p className="absolute w-[259px] top-[21px] -left-11 [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d5c7] text-[13px] text-center tracking-[1.04px] leading-[normal]">
              Thứ Sáu, ngày 03 tháng 01 năm 2025
            </p>

            <div className="-top-px left-0 absolute w-[170px] [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d5c7] text-[13px] text-center tracking-[1.04px] leading-[normal]">
              17 : 00
            </div>
          </div>
        </div>

        <div className="absolute w-20 h-px top-[697px] right-1/2 translate-x-1/2 bg-[#67695b]" />

        <div className="absolute w-20 h-px top-[1399px] right-1/2 translate-x-1/2 bg-[#67695b]" />

        <div className="absolute w-20 h-px top-[3447px] right-1/2 translate-x-1/2 bg-[#67695b]" />

        <p className="absolute top-[1446px] left-[57px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#67695b] text-base text-center tracking-[0] leading-[normal]">
          ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG TÔI
        </p>

        <div className="absolute w-full h-[534px] top-[2319px] left-0">
          <div className="absolute w-[327px] h-[22px] top-[474px] left-6">
            <div className="absolute w-[126px] h-px top-[17px] left-0 bg-[#67695b]" />

            <div className="absolute -top-px left-[142px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#67695b] text-base text-center tracking-[3.20px] leading-[normal]">
              ALBUM ẢNH CƯỚI
            </div>
          </div>

          <div className="absolute w-full h-[534px] top-0 left-0 bg-[#67695b]">
            <div className="absolute w-[246px] h-[478px] top-[70px] left-[71px]">
              <img
                className="absolute w-[50px] h-[50px] top-0.5 left-[3px] object-cover"
                alt="Video"
                src="https://c.animaapp.com/D4mYxIxt/img/video-10941645-1-1@2x.png"
              />

              <div className="absolute w-[246px] h-[478px] top-0 left-0">
                <div className="w-[76px] gap-8 absolute top-0 left-[170px] flex flex-col items-center">
                  <div className="w-[65px] gap-1.5 relative flex-[0_0_auto] flex flex-col items-center">
                    <div className="relative self-stretch mt-[-1.00px] text-[#f4efe9] [font-family:'Noto_Serif',Helvetica] font-normal text-sm text-center tracking-[2.52px] leading-[normal]">
                      17:00
                    </div>

                    <div className="relative w-fit ml-[-20.00px] mr-[-20.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-base text-center tracking-[2.88px] leading-[normal]">
                      Đón khách
                    </div>
                  </div>

                  <div className="flex flex-col w-[65px] items-center gap-1.5 relative flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-sm text-center tracking-[2.52px] leading-[normal]">
                      18:00
                    </div>

                    <div className="relative w-fit ml-[-4.50px] mr-[-4.50px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-base text-center tracking-[2.88px] leading-[normal]">
                      Lễ cưới
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-base text-center tracking-[2.88px] leading-[normal]">
                      18:30
                    </div>

                    <div className="relative self-stretch [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-base text-center tracking-[2.88px] leading-[normal]">
                      Tiệc tối
                    </div>
                  </div>

                  <div className="flex flex-col w-[65px] items-center gap-1.5 relative flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-sm text-center tracking-[2.52px] leading-[normal]">
                      19:30
                    </div>

                    <div className="relative w-fit ml-[-24.00px] mr-[-24.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-base text-center tracking-[2.88px] leading-[normal]">
                      After Party
                    </div>
                  </div>

                  <div className="flex flex-col w-[65px] items-center gap-1.5 relative flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-sm text-center tracking-[2.52px] leading-[normal]">
                      20:00
                    </div>

                    <div className="relative w-fit ml-[-13.00px] mr-[-13.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-base text-center tracking-[2.88px] leading-[normal]">
                      Pháo hoa
                    </div>
                  </div>
                </div>

                <div className="w-[306px] top-[178px] -left-12 bg-[#f4efe9] absolute h-px rotate-[90.00deg]" />

                <img
                  className="absolute w-[50px] h-[50px] top-[158px] left-0 object-cover"
                  alt="Image"
                  src="https://c.animaapp.com/D4mYxIxt/img/image-15-1@2x.png"
                />

                <img
                  className="top-[357px] left-14 absolute w-[122px] h-[121px] object-cover"
                  alt="Decorate flower"
                  src="https://c.animaapp.com/D4mYxIxt/img/decorate-flower-1-3@2x.png"
                />
              </div>

              <div className="absolute w-1.5 h-1.5 top-5 left-[102px] bg-[#f4efe9] rounded-[1px] rotate-45" />

              <div className="absolute w-1.5 h-1.5 top-[99px] left-[102px] bg-[#f4efe9] rounded-[1px] rotate-45" />

              <div className="absolute w-1.5 h-1.5 top-[180px] left-[102px] bg-[#f4efe9] rounded-[1px] rotate-45" />

              <div className="absolute w-1.5 h-1.5 top-64 left-[102px] bg-[#f4efe9] rounded-[1px] rotate-45" />

              <div className="absolute w-1.5 h-1.5 top-[331px] left-[102px] bg-[#f4efe9] rounded-[1px] rotate-45" />

              <img
                className="absolute w-[50px] h-[57px] top-[230px] left-0 object-cover"
                alt="Image"
                src="https://c.animaapp.com/D4mYxIxt/img/image-2-1@2x.png"
              />

              <img
                className="absolute w-[57px] h-[50px] top-[77px] left-0"
                alt="Timeline"
                src="https://c.animaapp.com/D4mYxIxt/img/timeline-1-1@2x.png"
              />

              <img
                className="absolute w-[50px] h-[50px] top-[309px] left-0 object-cover"
                alt="Fireworks"
                src="https://c.animaapp.com/D4mYxIxt/img/fireworks-389608-1-1@2x.png"
              />
            </div>

            <div className="absolute top-[19px] left-[107px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe94c] text-2xl text-center tracking-[4.80px] leading-[normal]">
              TIMELINE
            </div>
          </div>
        </div>

        <div className="absolute top-[3467px] left-[79px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#67695b] text-base text-center tracking-[3.20px] leading-[normal]">
          XÁC NHẬN THAM DỰ
        </div>

        <div className="absolute w-[327px] h-[508px] top-[2935px] left-6">
          <div className="flex w-[327px] items-center justify-center gap-2.5 px-0 py-3 absolute top-[432px] left-0 border border-solid border-[#67695b]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[#67695b] text-xs text-center tracking-[2.40px] leading-[normal]">
              XEM TẤT CẢ
            </div>
          </div>

          <div className="absolute w-[327px] h-[508px] top-0 left-0">
            <img
              className="absolute w-[161px] h-[180px] top-0 left-[166px]"
              alt="Beo"
              src="https://c.animaapp.com/D4mYxIxt/img/-beo5750-2-1@2x.png"
            />

            <img
              className="absolute w-[161px] h-[104px] top-[184px] left-[166px]"
              alt="Beo"
              src="https://c.animaapp.com/D4mYxIxt/img/-beo5750-3-1@2x.png"
            />

            <img
              className="absolute w-[161px] h-[104px] top-[404px] left-[166px]"
              alt="Beo"
              src="https://c.animaapp.com/D4mYxIxt/img/-beo5750-4-1@2x.png"
            />

            <img
              className="absolute w-[161px] h-[104px] top-[404px] left-0"
              alt="Beo"
              src="https://c.animaapp.com/D4mYxIxt/img/-beo5750-5-1@2x.png"
            />

            <img
              className="absolute w-[162px] h-72 top-0 left-0 object-cover"
              alt="Image"
              src="https://c.animaapp.com/D4mYxIxt/img/image-7-1@2x.png"
            />

            <img
              className="absolute w-[327px] h-[108px] top-[292px] left-0"
              alt="Image"
              src="https://c.animaapp.com/D4mYxIxt/img/image-6-1@2x.png"
            />
          </div>
        </div>

        <img
          className="absolute w-[327px] h-28 top-[1598px] left-6"
          alt="Image"
          src="https://c.animaapp.com/D4mYxIxt/img/image-9-1@2x.png"
        />

        <div className="absolute w-[327px] h-[259px] top-[1750px] left-6">
          <p className="absolute top-[35px] left-[22px] [font-family:'Noto_Serif',Helvetica] font-normal italic text-[#67695b] text-sm text-center tracking-[2.52px] leading-[normal]">
            03 - 01 - 2025
          </p>

          <p className="absolute top-[72px] left-12 [font-family:'Noto_Serif',Helvetica] font-normal italic text-[#67695b] text-[10px] text-center tracking-[1.80px] leading-[normal]">
            tức ngày 04 tháng 12 năm Giáp Thìn
          </p>

          <p className="absolute w-[327px] top-[134px] left-0 [font-family:'Noto_Serif',Helvetica] font-normal italic text-[#67695b] text-[10px] text-center tracking-[1.20px] leading-[normal]">
            614 đường Lạc Long Quân, phường Nhật Tân, <br />
            quận Tây Hồ, Hà Nội
          </p>

          <div className="absolute top-[35px] left-[223px] italic text-[#67695b] [font-family:'Noto_Serif',Helvetica] font-normal text-sm text-center tracking-[2.52px] leading-[normal]">
            17:00
          </div>

          <div className="absolute top-1 left-[63px] [font-family:'Noto_Sans_Tamil_UI-Bold',Helvetica] font-bold text-[#67695b] text-xs text-center tracking-[0.72px] leading-[normal]">
            NGÀY
          </div>

          <div className="absolute w-[103px] h-[46px] top-[199px] left-[22px]">
            <div className="absolute top-[15px] left-0 [font-family:'Noto_Serif',Helvetica] font-normal italic text-[#67695b] text-[10px] text-center tracking-[1.00px] leading-[normal]">
              Ông Trần Sĩ Long
            </div>

            <div className="absolute top-8 left-[5px] [font-family:'Noto_Serif',Helvetica] font-normal italic text-[#67695b] text-[10px] text-center tracking-[1.00px] leading-[normal]">
              Bà Mai Thị Huệ
            </div>

            <div className="absolute top-0 left-6 [font-family:'Noto_Sans_Tamil_UI-Bold',Helvetica] font-bold text-[#67695b] text-[9px] text-center tracking-[0.54px] leading-[normal]">
              NHÀ TRAI
            </div>
          </div>

          <div className="absolute w-[119px] h-[46px] top-[199px] left-[200px]">
            <div className="absolute top-[15px] left-0 [font-family:'Noto_Serif',Helvetica] font-normal italic text-[#67695b] text-[10px] text-center tracking-[1.00px] leading-[normal]">
              Ông Trần Quốc Bính
            </div>

            <div className="absolute top-8 left-0 [font-family:'Noto_Serif',Helvetica] font-normal italic text-[#67695b] text-[10px] text-center tracking-[1.00px] leading-[normal]">
              Bà Nguyễn Thị Minh
            </div>

            <div className="absolute top-0 left-[35px] [font-family:'Noto_Sans_Tamil_UI-Bold',Helvetica] font-bold text-[#67695b] text-[9px] text-center tracking-[0.54px] leading-[normal]">
              NHÀ GÁI
            </div>
          </div>

          <p className="absolute w-[327px] top-[108px] left-0 [font-family:'Noto_Sans_Tamil_UI-Bold',Helvetica] font-bold text-[#67695b] text-[13px] text-center tracking-[1.56px] leading-[normal]">
            SẢNH TIỆC STAR PALACE - SEN TÂY HỒ
          </p>

          <div className="absolute top-1 left-[233px] [font-family:'Noto_Sans_Tamil_UI-Bold',Helvetica] font-bold text-[#67695b] text-xs text-center tracking-[0.72px] leading-[normal]">
            GIỜ
          </div>

          <div className="absolute w-[327px] h-px top-0 left-0 bg-[#67695b]" />

          <div className="absolute w-[327px] h-px top-[66px] left-0 bg-[#67695b]" />

          <div className="absolute w-[327px] h-px top-[179px] left-0 bg-[#67695b]" />

          <div className="absolute w-[327px] h-px top-[26px] left-0 bg-[#67695b]" />

          <div className="absolute w-[327px] h-px top-[95px] left-0 bg-[#67695b]" />

          <div className="w-[66px] top-[33px] left-[130px] bg-[#67695b] absolute h-px rotate-[90.00deg]" />
        </div>

        <img
          className="absolute w-[327px] h-[218px] top-[2035px] left-6 object-cover"
          alt="Image"
          src="https://c.animaapp.com/D4mYxIxt/img/image-14-1@2x.png"
        />

        <p className="absolute top-[2273px] left-[116px] [font-family:'Noto_Serif',Helvetica] font-normal italic text-[#67695b] text-[8px] text-center tracking-[1.44px] leading-[normal]">
          Rất hân hạnh được đón tiếp!
        </p>

        <div className="absolute w-full h-[103px] top-[4216px] left-0 bg-[#67695b]">
          <div className="top-11 left-px absolute w-[170px] [font-family:'Noto_Serif',Helvetica] font-light text-[#e3d5c7] text-[13px] text-center tracking-[1.04px] leading-[normal]">
            17 : 00
          </div>
        </div>

        <div className="absolute w-[327px] h-[512px] top-[3610px] left-6 bg-[url(https://c.animaapp.com/D4mYxIxt/img/image-8-1.png)] bg-cover bg-[50%_50%]">
          <div className="relative w-[287px] h-[472px] top-5 left-5 bg-[#2c2825cc]">
            <div className="flex w-[263px] items-center gap-2.5 px-3 py-4 absolute top-10 left-3 border border-solid border-[#f4efe9]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[#f4efe9] text-xs text-center tracking-[1.44px] leading-[normal]">
                Tên của bạn
              </div>
            </div>

            <div className="flex w-[263px] items-end justify-center gap-2.5 px-3 py-4 absolute top-96 left-3 bg-[#a2978c] border border-solid border-[#f4efe9]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[#f4efe9] text-xs text-center tracking-[1.44px] leading-[normal]">
                Gửi xác nhận
              </div>
            </div>

            <div className="flex flex-col w-[263px] items-start gap-3 absolute top-28 left-3">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[#f4efe9] text-xs tracking-[1.44px] leading-[normal]">
                Bạn sẽ tham dự chứ ?
              </p>

              <div className="flex flex-col items-start justify-center gap-4 px-3 py-4 relative self-stretch w-full flex-[0_0_auto] border border-solid border-[#f4efe9]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-4 h-4 rounded-lg border border-solid border-[#f4efe9]" />

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-xs text-center tracking-[0.48px] leading-[normal]">
                    Sẽ tham dự
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-4 h-4 rounded-lg border border-solid border-[#f4efe9]" />

                  <p className="relative w-fit mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-normal text-[#f4efe9] text-xs text-center tracking-[0.48px] leading-[normal]">
                    Không tham dự được mất rồi :(
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[263px] items-start gap-3 absolute top-[244px] left-3">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Serif',Helvetica] font-bold text-[#f4efe9] text-xs tracking-[1.44px] leading-[normal]">
                Bạn là khách mời của ai ?
              </p>

              <div className="flex flex-col items-start justify-center gap-4 px-3 py-4 relative self-stretch w-full flex-[0_0_auto] border border-solid border-[#f4efe9]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-4 h-4 rounded-lg border border-solid border-[#f4efe9]" />

                  <div className="relative w-fit mt-[-1.00px] font-normal text-xs tracking-[0.48px] [font-family:'Noto_Serif',Helvetica] text-[#f4efe9] text-center leading-[normal]">
                    Chú rể
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-4 h-4 rounded-lg border border-solid border-[#f4efe9]" />

                  <div className="relative w-fit mt-[-1.00px] font-normal text-xs tracking-[0.48px] [font-family:'Noto_Serif',Helvetica] text-[#f4efe9] text-center leading-[normal]">
                    Cô dâu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
