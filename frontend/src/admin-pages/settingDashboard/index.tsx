const SettingDashboard = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="grid grid-cols-12 gap-6 max-w-3xl mx-auto mb-6">
        {/* User Wise */}
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-md">
          <div className="text-center item-center block">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full text-center">
                <a href="/admin/Settings/user">
                  <div className="p-3 font-semibold text-xl text-gray-700 border-b-2 border-neutral-200">
                    Users
                  </div>
                </a>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/user">
                    <div>Active</div>
                  </a>
                  <div>38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/user">
                    <div>InActive</div>
                  </a>
                  <div>0</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/user">
                    <div>Total</div>
                  </a>
                  <div>38</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Role Wise */}
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-md">
          <div className="text-center item-center block">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full text-center">
                <a href="/admin/Settings/roles">
                  <div className="p-3 font-semibold text-xl text-gray-700 border-b-2 border-neutral-200">
                    Roles
                  </div>
                </a>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/roles">
                    <div>Active</div>
                  </a>
                  <div>4</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/roles">
                    <div>InActive</div>
                  </a>
                  <div>0</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/roles">
                    <div>Total</div>
                  </a>
                  <div>4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 max-w-full mx-auto mb-6">
        <div className="flex flex-col col-span-full xl:col-span-2"> </div>

        {/* Modules Wise User */}
        <div className="flex flex-col col-span-full xl:col-span-4 bg-white shadow-lg rounded-md">
          <div className="text-center item-center block">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full text-center">
                <div className="p-3 font-semibold text-xl text-gray-700 border-b-2 border-neutral-200">
                  <div>Modules Wise User </div>
                </div>
                <div className="p-3 text-gray-700 uppercase font-bold text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div className="text-gray-400"> Module Name</div>
                  <div className="text-gray-400"> Users </div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Dashboard</div>
                  <div> 38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Master Product Feed</div>
                  <div> 38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Stores</div>
                  <div> 38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Content Management </div>
                  <div> 38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Orders</div>
                  <div> 38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Customer</div>
                  <div> 38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Promotions</div>
                  <div> 38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Settings</div>
                  <div> 38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Configurator</div>
                  <div> 38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Google Analytics</div>
                  <div> 31</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Dashboard Widget</div>
                  <div> 31</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Reports</div>
                  <div> 38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> Weight Master</div>
                  <div> 31</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Wise User */}
        <div className="flex flex-col col-span-full xl:col-span-4">
          <div className="w-full bg-white shadow-lg rounded-md h-full">
            <div className=" text-base lg:text-xl text-gray-700 px-5 py-4 border-b-2 border-neutral-200">
              <div className="sm:flex sm:justify-between sm:items-center">
                <div className="font-semibold">Module Wise User Report</div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div className="flex flex-wrap p-3 justify-center item-center text-center">
              <div className="inline-block">
                <div
                  className="recharts-wrapper"
                  style={{position: "relative", cursor: "default", height: "300px"}}
                >
                  <svg
                    cx="50%"
                    cy="50%"
                    className="recharts-surface"
                    width="400"
                    height="300"
                    viewBox="0 0 400 300"
                    style={{width: "100%", height: "100%"}}
                  >
                    <title></title>
                    <desc></desc>
                    <defs>
                      <clipPath id="recharts1-clip">
                        <rect x="5" y="5" height="290" width="390"></rect>
                      </clipPath>
                    </defs>
                    <g className="recharts-layer recharts-pie" tabIndex={0}>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Dashboard"
                          stroke="#fff"
                          fill="#86EFAC"
                          color="#86EFAC"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 315,155
    A 120,120,0,
    0,0,
    300.0336944314132,96.96619059471873
  L 266.7730245281324,115.34356357305779
            A 82,82,0,
            0,1,
            277,155 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Master Product Feed"
                          stroke="#fff"
                          fill="#263cff"
                          color="#263cff"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 300.0336944314132,96.96619059471873
    A 120,120,0,
    0,0,
    258.8679494318581,53.408243270580186
  L 238.64309877843635,85.57896623489646
            A 82,82,0,
            0,1,
            266.7730245281324,115.34356357305779 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Stores"
                          stroke="#fff"
                          fill="#B5BECC"
                          color="#B5BECC"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 258.8679494318581,53.408243270580186
    A 120,120,0,
    0,0,
    201.7710836450324,35.191183854142125
  L 199.6269071574388,73.13064230033045
            A 82,82,0,
            0,1,
            238.64309877843635,85.57896623489646 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Content Management "
                          stroke="#fff"
                          fill="#93C5FD"
                          color="#93C5FD"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 201.7710836450324,35.191183854142125
    A 120,120,0,
    0,0,
    142.9852494105064,46.85904697519642
  L 159.45658709717938,81.10368209971756
            A 82,82,0,
            0,1,
            199.6269071574388,73.13064230033045 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Orders"
                          stroke="#fff"
                          fill="#FDA4AF"
                          color="#FDA4AF"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 142.9852494105064,46.85904697519642
    A 120,120,0,
    0,0,
    97.17389269925026,85.50141922037402
  L 128.15216001115434,107.50930313392224
            A 82,82,0,
            0,1,
            159.45658709717938,81.10368209971756 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Customer"
                          stroke="#fff"
                          fill="#FDE047"
                          color="#FDE047"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 97.17389269925026,85.50141922037402
    A 120,120,0,
    0,0,
    75.76412622880042,141.47940807440145
  L 113.52215292301362,145.760928850841
            A 82,82,0,
            0,1,
            128.15216001115434,107.50930313392224 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Promotions"
                          stroke="#fff"
                          fill="#7DD3FC"
                          color="#7DD3FC"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 75.76412622880042,141.47940807440145
    A 120,120,0,
    0,0,
    84.09636845163745,200.82995209887352
  L 119.21585177528559,186.31713393423024
            A 82,82,0,
            0,1,
            113.52215292301362,145.760928850841 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Settings"
                          stroke="#fff"
                          fill="#BEF264"
                          color="#BEF264"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 84.09636845163745,200.82995209887352
    A 120,120,0,
    0,0,
    120.09223798145375,248.74874500158836
  L 143.81302928732674,219.06164241775207
            A 82,82,0,
            0,1,
            119.21585177528559,186.31713393423024 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Configurator"
                          stroke="#fff"
                          fill="#FDBA74"
                          color="#FDBA74"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 120.09223798145375,248.74874500158836
    A 120,120,0,
    0,0,
    174.77298177507905,273.2829984982149
  L 181.17820421297068,235.82671564044688
            A 82,82,0,
            0,1,
            143.81302928732674,219.06164241775207 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Google Analytics"
                          stroke="#fff"
                          fill="#D8B4FE"
                          color="#D8B4FE"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 174.77298177507905,273.2829984982149
    A 120,120,0,
    0,0,
    223.80716297237743,271.49097545081713
  L 214.68489469779124,234.6021665580584
            A 82,82,0,
            0,1,
            181.17820421297068,235.82671564044688 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Dashboard Widget"
                          stroke="#fff"
                          fill="#F9A8D4"
                          color="#F9A8D4"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 223.80716297237743,271.49097545081713
    A 120,120,0,
    0,0,
    268.02502203467174,250.2226136841229
  L 244.90043172369235,220.06878601748397
            A 82,82,0,
            0,1,
            214.68489469779124,234.6021665580584 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Reports"
                          stroke="#fff"
                          fill="#67E8F9"
                          color="#67E8F9"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 268.02502203467174,250.2226136841229
    A 120,120,0,
    0,0,
    304.968490532117,203.0305224840172
  L 270.1451351969466,187.8208570307451
            A 82,82,0,
            0,1,
            244.90043172369235,220.06878601748397 Z"
                          role="img"
                        ></path>
                      </g>
                      <g
                        className="recharts-layer recharts-pie-sector"
                        tabIndex={-1}
                      >
                        <path
                          cx="195"
                          cy="155"
                          name="Weight Master"
                          stroke="#fff"
                          tabIndex={-1}
                          className="recharts-sector"
                          d="M 304.968490532117,203.0305224840172
    A 120,120,0,
    0,0,
    315,155.00000000000003
  L 277,155.00000000000003
            A 82,82,0,
            0,1,
            270.1451351969466,187.8208570307451 Z"
                          role="img"
                        ></path>
                      </g>
                      <g>
                        <text
                          x="195"
                          y="155"
                          className="recharts-text recharts-label"
                          text-anchor="middle"
                          dominant-baseline="central"
                          alignment-baseline="middle"
                          font-size="12"
                        >
                          Total Modules
                        </text>
                        <text
                          x="195"
                          y="175"
                          className="recharts-text recharts-label"
                          text-anchor="middle"
                          dominant-baseline="central"
                          alignment-baseline="middle"
                          font-size="22"
                          font-weight="600"
                        >
                          38
                        </text>
                      </g>
                    </g>
                  </svg>
                  <div
                    tabIndex={-1}
                    className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
                    style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", transform: "translate(10px, 10px)"}}
                  >
                    <div
                      className="recharts-default-tooltip"
                      style={{margin: "0px", padding: "10px", backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(204, 204, 204)", whiteSpace: "nowrap"}}
                    >
                      <p
                        className="recharts-tooltip-label"
                        style={{margin: "0px"}}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 pt-2 pb-3">
              <ul className="flex flex-wrap justify-center">
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Dashboard"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(134, 239, 172)"}}
                    ></span>
                    <span className="flex items-center">Dashboard</span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Master Product Feed"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(38, 60, 255)"}}
                    ></span>
                    <span className="flex items-center">
                      Master Product Feed
                    </span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Stores"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(181, 190, 204)"}}
                    ></span>
                    <span className="flex items-center">Stores</span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Content Management "
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(147, 197, 253)"}}
                    ></span>
                    <span className="flex items-center">
                      Content Management{" "}
                    </span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Orders"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(253, 164, 175)"}}
                    ></span>
                    <span className="flex items-center">Orders</span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Customer"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(253, 224, 71)"}}
                    ></span>
                    <span className="flex items-center">Customer</span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Promotions"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(125, 211, 252)"}}
                    ></span>
                    <span className="flex items-center">Promotions</span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Settings"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(190, 242, 100)"}}
                    ></span>
                    <span className="flex items-center">Settings</span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Configurator"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(253, 186, 116)"}}
                    ></span>
                    <span className="flex items-center">Configurator</span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Google Analytics"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(216, 180, 254)"}}
                    ></span>
                    <span className="flex items-center">Google Analytics</span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Dashboard Widget"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                      style={{background: "rgb(249, 168, 212)"}}
                    ></span>
                    <span className="flex items-center">Dashboard Widget</span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Reports"
                  >
                    <span
                      className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                            style={{background: "rgb(103, 232, 249)"}}
                    ></span>
                    <span className="flex items-center">Reports</span>
                  </button>
                </li>
                <li className="margin: 0.25rem">
                  <button
                    className="btn-xs bg-white border-y-neutral-900 border-x-slate-900 shadow-neutral-900 mr-3 mb-2 false flex items-center"
                    type="button"
                    name="Weight Master"
                  >
                    <span className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"></span>
                    <span className="flex items-center">Weight Master</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingDashboard;
