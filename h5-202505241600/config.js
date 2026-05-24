/**
 * picture naming rules:
 * pc : [name].[ext]
 * pc webp : [name].webp
 * mobile : [name]_mobile.[ext]
 * mobile webp : [name]_mobile.webp
 */
window.znConfig = {
  // kv
  s1: {
    title: "<span>SPARK</span>50Pro",
    desc: "Shine On, Charge Up",
    b1_top: "6000mAh",
    b1_top_desc: "Long-lasting Battery",
    b1_bottom: "60W",
    b1_bottom_desc: "Super Charging",
    b2_top: "IP68/IP69",
    b2_bottom: "Dust & Water Resistance",
    b3_top: "50MP Sony's",
    b3_bottom: "LYTIA 600 Main Camera",
    show_picture_only: false, // 纯图模式 / 图文分离
    kv_image_only: "./assets/kv-6000-image.jpg", // 纯图模式
    kv_bg_image: "./assets/kv-bg.jpg", // 图文分离
  },
  // nav
  s2: {
    //32
    nav1: "6000mAh <br>Long-lasting <br class='pc-only'>Battery",
    nav2: "<span>60W</span> <br>Super Charging",
    nav3: "6-Year Durable Endurance",
    nav4: "IP68/IP69 Dust <br class='mb-only'>& Water Resistance",
    nav5: "SGS Five-Star <span>Premium</span> <br>Drop Resistance",
    nav6: "50MP <span>Sony's</span> <br>LYTIA 600 Main Camera",
    nav7: "TECNO AI",
    nav7_small: "Problem Solving <br>All Scenario Noise Cancellation",
    nav8: "MediaTek Helio <br>G100 Ultimate Processor",
    nav9: "120Hz 6.78'' HD+Display",
    nav1_bg: "./assets/nav-1-bg.jpg",
    nav2_bg: "./assets/nav-2-bg.jpg",
    nav_image_1: "./assets/nav-1-out.png",
    nav_image_2: "./assets/nav-60W.png",
    nav_image_3: "./assets/nav-3.jpg",
    nav_image_4: "./assets/nav-4.jpg",
    nav_image_5: "./assets/nav-5.jpg",
    nav_image_6: "./assets/nav-6.jpg",
    nav_image_7: "./assets/nav-7.jpg",
    nav_image_8: "./assets/nav-8.jpg",
    nav_image_9: "./assets/nav-9.jpg",
  },
  s3: {
    video: "./assets/KO5-cg.mp4",
    video_poster: "./assets/KO5-cg-poster.jpg",
    video_mobile: "./assets/KO5-cg_mobile.mp4",
    video_mobile_poster: "./assets/KO5-cg_mobile-poster.jpg",
  },
  //iconic design
  s4: {
    title: "BATTERY",
    battery_sub_title1: "<i>6000mAh</i> <br>LONG-LASTING BATTERY",
    battery_sub_title2: "<i>60W</i> <br>SUPER CHARGING",
    battery_b1: "All-Day <br>Power",
    battery_b2: "Rapid Recharge <br>in Minutes",
    battery_b3: "Zero Battery <br>Anxiety",

    power_sub_title: "<span>All-Day</span> <br>Power",
    power_b1: "6000mAh Performance",
    power_hrs: "hrs",
    power_hrs_1: "43.06",
    power_hrs_1_desc: "Voice Calls",
    power_hrs_2: "9.54",
    power_hrs_2_desc: "TikTok",
    power_hrs_3: "13.99",
    power_hrs_3_desc: "YouTube",
    power_hrs_4: "8.49",
    power_hrs_4_desc: "PUBG Gaming",
    power_text:
      "The high-capacity 6000mAh battery <br class='pc-only'>delivers reliable power <br class='mb-only'>for both work <br class='pc-only'>and entertainment, eliminating the <br class='pc-only'>need for <br class='mb-only'>frequent charging.",

    extend_sub_title: "<span>Extended Battery</span> <br>Lifespan",
    extend_text:
      "Engineered for longevity, the battery maintains optimal <br class='pc-only'>capacity <br class='mb-only'>for up to 6 years of reliable performance.",
    extend_b1: "1900",
    extend_b1_desc: "Charge Cycles",

    fast_sub_title: "Blazing-<span>Fast Charging</span>",
    fast_text:
      "60W Super-Fast Charging delivers ample power for <br class='pc-only'>urgent calls and <br class='mb-only'>on-the-go use during a quick break. <br class='pc-only'>Adaptive AI Charging protects <br class='mb-only'>long-term battery health <br class='pc-only'>by pausing at 80% during extended charging <br class='mb-only'>sessions, <br class='pc-only'>automatically completing the charge just before you unplug.",
    fast_b1: "100% Charge in 55 Minutes",

    bypass_sub_title: "Bypass <span>Charging</span>",
    bypass_text:
      "During intensive tasks like gaming or streaming video while plugged in, <br class='mb-only'>power bypasses the battery and is routed directly to <br class='pc-only'>the motherboard. <br class='mb-only'>This reduces unnecessary charge cycles, extends long-term battery <br class='mb-only'>lifespan, and minimizes heat build-up <br class='pc-only'>for a cooler, more comfortable <br class='mb-only'>handling experience.",

    mode_sub_title: "3 Versatile Charging Modes",
    mode_1_title: "Hyper Charging",
    mode_1_text:
      "Prioritizes maximum speed for <br class='pc-only'>rapid on-the-go top-ups, <br class='mb-only'>allowing <br class='pc-only'>slightly higher temperatures to <br class='pc-only'>deliver power instantly.",
    mode_2_title: "Smart Charging",
    mode_2_text:
      "Delivers the perfect balance <br class='pc-only'>of charging speed <br class='mb-only'>and thermal <br class='pc-only'>control for optimal everyday use.",
    mode_3_title: "Low-Temp Charging",
    mode_3_text:
      "Minimizes heat generation <br class='pc-only'>to protect long-term <br>battery health by charging <br class='pc-only'>at a gentler, cooler pace.",

    title_bg: "./assets/title-bg.png",
    power_bg: "./assets/power-bg.png",
    power_phone: "./assets/power-phone.png",
    power_phone_light: "./assets/power-phone-light.png",
    extend_icon: "./assets/extend-icon.png",
    fast_bg: "./assets/charging-bg.jpg",
    fast_60w: "./assets/60W-text.png",
    bypass_bg: "./assets/bypass-bg.jpg",
    bypass_phone: "./assets/bypass.png",
  },
  s5: {
    title: "DURABLE",
    durable_sub_title: "<i>360°</i> <br>DROP PROTECTION",
    durable_b1: "6-Series",
    durable_b1_desc: "Aerospace-Grade <br class='mb-only'>Materials",
    durable_b2: "Ultra",
    durable_b2_desc: "Rigid Body",
    durable_b3: "500+",
    durable_b3_desc: "Structural <br class='mb-only'>Simulations",
    durable_b4: "Precision",
    durable_b4_desc: "Crafted <br class='mb-only'>Metal Deco",
    durable_s1:
      "A precision-machined CNC Deco seamlessly <br class='mb-only'>integrates into the body, <br class='pc-only'>shielding the <br class='mb-only'>camera from everyday bumps and scratches.",
    durable_s2:
      "Validated by over 500 structural simulations <br class='mb-only'>to guarantee flagship-level reliability",
    durable_s3:
      "6-Series Aerospace-Grade Protection. Superior durability <br class='mb-only'>beyond its class. <br class='pc-only'>Engineered with an automotive-grade <br class='mb-only'>die-cast structure and a dedicated battery <br class='pc-only'>frame,  it delivers <br class='mb-only'>exceptional structural integrity while maintaining a sleek profile.",

    sgs_icon_text: "SGS Five-Star <br>Premium Drop <br>Resistance",
    sgs_text:
      "Proven to withstand multi-angle impacts from 1.2 meters, <br class='pc-only'>extreme drops <br class='mb-only'>from up to 1.8 meters, and an exhaustive <br class='pc-only'>series of 41 rigorous drop tests. <br class='mb-only'>Independently certified <br class='pc-only'>by the globally recognized Swiss authority, SGS, <br class='mb-only'>ensuring <br class='pc-only'>uncompromising durability and reliable quality.",

    flash_sub_title: "Flagship IP68, <br>6m Water Depth, No Fear",
    flash_desc: "IP68 & IP69 Ultimate Dual Protection",
    flash_text:
      "Comprehensive water and dust resistance, featuring complete <br class='pc-only'>defense <br class='mb-only'>against high-pressure, high-temperature water jets. <br class='pc-only'>Reliable durability <br class='mb-only'>for daily use, delivering ultimate peace of <br class='pc-only'>mind in any environment.",
    flash_notice:
      "*Not a professional waterproof device. IP68/IP69 rated for splash, water and dust <br class='mb-only'>resistance. Do not <br class='pc-only'>submerge or expose to liquids. Water may affect audio, restorable <br class='mb-only'>after drying. Protection not permanent. <br class='pc-only'>Do not charge wet. Liquid damage not covered.",
    flash_b1: "IP68",
    flash_b1_desc: "Flagship IP68 <br class='mb-only'>waterproofing",
    flash_b2: "6m",
    flash_b2_desc: "6m depth",
    flash_b3: "30-minutes",
    flash_b3_desc: "30-minutes <br class='mb-only'>immersion tested",

    durable_image_1: "./assets/durable-1.png",
    durable_image_2: "./assets/durable-2.png",
    durable_image_3: "./assets/durable-3.png",
    durable_left_icon: "./assets/arrow-left.png",
    durable_right_icon: "./assets/arrow-right.png",
    sgs_bg: "./assets/sgs-bg.jpg",
    sgs_logo_left: "./assets/sgs-left.png",
    sgs_logo_right: "./assets/sgs-right.png",
    flash_bg: "./assets/flashship.jpg",
  },
  s6: {
    title: "TECNO AI",
    ask_sub_title: "Ask Ella",
    ask_text:
      "Intelligent Voice Assistant Activate Ella anytime, anywhere through multiple <br class='mb-only'>convenient methods. With just a single voice command, Ella instantly <br class='mb-only'>executes <br class='pc-only'>your tasks and boosts your productivity. Enjoy seamless access <br class='mb-only'>to powerful AI features including one-tap summarization, document analysis, <br class='mb-only'>smart search, <br class='pc-only'>device assistance, and contextual on-screen inquiries.",
    ask_b1: "one-tap summarization",
    ask_b2: "smart search",
    ask_b3: "device assistance",
    ask_b4: "contextual <br class='mb-only'>on-screen inquiries",
    ask_b5: "document analysis",

    ally_title: "YOUR STUDY ALLY",
    ally_sub_title_1: "Problem Solving",
    ally_text_1:
      "Your versatile, multilingual study companion for every <br class='pc-only'>subject. <br class='mb-only'>Simply snap a photo of any question to instantly <br class='pc-only'>receive detailed, <br class='mb-only'>step-by-step solutions. Featuring <br class='pc-only'>dedicated Student and Parent <br class='mb-only'>modes to help cultivate <br class='pc-only'>positive problem-solving habits and guided <br class='mb-only'>learning.",
    ally_sub_title_2: "AI Writing",
    ally_text_2:
      "It features text generation, proofreading, and summarization. <br>Accessible with a text selection. Refine your social posts.",
    partner_title: "YOUR HEALTH PARTNER",
    partner_sub_title_1: "AI Health Assistant",
    partner_text_1:
      "Powered by advanced rPPG technology, the AI Health <br class='pc-only'>Assistant <br class='mb-only'>enables you to measure blood pressure, blood <br class='pc-only'>oxygen levels, heart <br class='mb-only'>rate, and respiratory rate using just <br class='pc-only'>your smartphone camera. <br class='mb-only'>Beyond basic tracking, it delivers <br class='pc-only'>personalized insights, reliable <br class='mb-only'>health answers, and <br class='pc-only'>evidence-based symptom checking.",
    partner_notice_1:
      "*This feature is currently only available in the following countries:Nigeria, Kenya, <br class='mb-only'>Ghana, <br class='pc-only'>the Democratic Republic of the Congo, Syria, Iraq, Saudi Arabia, <br class='mb-only'>Venezuela, Ecuador, <br class='pc-only'>the Philippines, Indonesia, Pakistan, Bangladesh, Mexico, <br class='mb-only'>Colombia, the Dominican <br class='pc-only'>Republic, Guatemala, Bolivia, Argentina and Brazil.",
    partner_1_b1: "measure <br>blood pressure",
    partner_1_b2: "heart rate",
    partner_1_b3: "blood oxygen levels",

    assist_title: "YOUR LIFE ASSISTANT",
    assist_sub_title_1: "FlashMemo",
    assist_text_1:
      "Capture your screen in an instant. The AI automatically <br class='pc-only'>extracts <br class='mb-only'>key information, generating smart titles, comprehensive <br class='pc-only'>summaries, <br class='mb-only'>and intuitive tags for effortless organization.",
    assist_desc_1_2: "Quick Voice Activation",
    assist_text_1_2:
      'Press the power button to activate Ella and simply <br class="pc-only">say, <br class="mb-only">"Remember this screen."',
    assist_desc_1_3: "Seamless Sharing",
    assist_text_1_3:
      "Send text, images, documents, or links directly to FlashMemo.",

    assist_sub_title_2: "AI WhatsApp <br>Assistant",
    assist_text_2:
      "Enjoy complete hands-free control for WhatsApp. <br class='pc-only'>Automatically <br class='mb-only'>hear incoming messages read aloud <br class='pc-only'>when your headphones are <br class='mb-only'>connected, and compose <br class='pc-only'>new messages effortlessly using intuitive <br class='mb-only'>voice commands.",

    ask_bg: "./assets/ask-bg.jpg",
    phone_bg: "./assets/phone-bg.png",
    phone_camera: "./assets/phone-camera.png",
    ask_video: "./assets/ask-video.mp4",
    ask_video_poster: "./assets/ask-video-poster.jpg",
    ai_bg: "./assets/ally-bg.jpg",
    ai_1_video: "./assets/ai-problem-solving-video.mp4",
    ai_1_video_poster: "./assets/ai-problem-solving-video-poster.jpg",
    ai_2_video: "./assets/ai-writing-video.mp4",
    ai_2_video_poster: "./assets/ai-writing-video-poster.jpg",
    ai_3_video: "./assets/ai-health-assit-video.mp4",
    ai_3_video_poster: "./assets/ai-health-assit-video-poster.jpg",
    ai_4_video: "./assets/flashmemo-video.mp4",
    ai_4_video_poster: "./assets/flashmemo-video-poster.jpg",
    ai_5_video: "./assets/whatsapp-video.mp4",
    ai_5_video_poster: "./assets/whatsapp-video-poster.jpg",
  },
  s7: {
    title: "PHOTOGRAPHY",
    camera_sub_title:
      "<span>50MP Sony's</span> <br class='mb-only'>LYTIA 600 Main Camera",
    camera_text:
      "A high-performance  1/1.95-inch sensor equipped with advanced 2×2 OCL <br class='mb-only'>technology, delivering consistently brilliant, hardware-level image quality.",
    camera_b1: "50MP",
    camera_b1_desc: "Main Camera",
    camera_b2: "8MP",
    camera_b2_desc: "Front Camera",

    flash_sub_title: "FlashSnap",
    flash_desc: "Sharp Shots, Every Time",
    flash_text:
      "Featuring instant launch, an ultra-fast shutter, and AI <br class='pc-only'>best-moment <br class='mb-only'>capture. Leverage the large Sony sensor <br class='pc-only'>to freeze fast-paced action <br class='mb-only'>with crystal-clear precision.",

    live_sub_title: "Live Photo",
    live_desc: "Moments kept in motion.",
    live_text:
      "Capture more than just a single frame. Preserve natural <br class='pc-only'>emotions <br class='mb-only'>and subtle movements, bringing your memories <br class='pc-only'>to life so you can <br class='mb-only'>revisit them vividly anytime.",
    airaw_sub_title: "AI RAW <br>Full-Scene <br>Imaging Engine",
    airaw_desc:
      "Available on models with <br class='pc-only'>8GB RAM or higher",
    airaw_text:
      "Seamlessly integrates AI noise reduction, HDR <br class='pc-only'>enhancement, <br class='mb-only'>super-resolution zoom, and ultra-night <br class='pc-only'>algorithms for flawless <br class='mb-only'>photography in any environment. <br class='pc-only'>Captures true-to-life textures, <br class='mb-only'>perfectly balanced exposure, <br class='pc-only'>and authentic light and shadow details.",

    helper_title: "YOUR CREATIVE HELPER",
    helper_sub_title_1: "AI Extender",
    helper_text_1:
      "Intelligently expand the borders of your photos. The AI accurately <br class='mb-only'>restores landscape and <br class='pc-only'>architectural details, seamlessly blending <br class='mb-only'>textures to perfect your wide-angle shots.",
    helper_sub_title_2: "AI Eraser 2.0",
    helper_text_2:
      "Effortlessly erase unwanted objects. Highly optimized for architectural, <br class='mb-only'>landscape, <br class='pc-only'>and portrait photography, the AI seamlessly fills in the <br class='mb-only'>background for natural, flawless results.",
    helper_sub_title_3: "AIGC Portrait 3.0",
    helper_text_3:
      "Generate an array of diverse hairstyles and stylish outfits using <br class='mb-only'>just four reference photos. <br class='pc-only'>Expertly tuned for global aesthetic trends, <br class='mb-only'>it delivers flawless, personalized portraits that are ready for instant <br class='mb-only'>social media sharing.",

    camera_bg: "./assets/camera.jpg",
    flashsnap_image: "./assets/flashsnap.jpg",
    live_video: "./assets/live-video.mp4",
    live_video_poster: "./assets/live-video-poster.jpg",
    airaw_image: "./assets/airaw.jpg",
    studio_1_poster: "./assets/ai-extender-video-poster.jpg",
    studio_2_poster: "./assets/ai-eraser-video-poster.jpg",
    studio_3_poster: "./assets/aigc-protrait-video-poster.jpg",
    studio_1_video: "./assets/ai-extender-video.mp4",
    studio_2_video: "./assets/ai-eraser-video.mp4",
    studio_3_video: "./assets/aigc-protrait-video.mp4",
    icon_left: "./assets/arrow-left.png",
    icon_right: "./assets/arrow-right.png",
  },
  s8: {
    title: "DESIGN",
    design_sub_title: "Ultra-slim & <br class='pc-only'>Featherlight",
    design_text:
      "An ultra-slim 7.8mm profile features elegantly curved <br class='pc-only'>edges for a <br class='mb-only'>comfortable, ergonomic grip. Available in <br class='pc-only'>a range of trendy colors, <br class='mb-only'>it seamlessly blends sleekness <br class='pc-only'>and style to match your unique aesthetic.",
    design_mm: "<span>7.8</span>mm",

    tech_sub_title: "Tech Aesthetics",
    tech_text:
      "The sleek glass back showcases an iconic camera layout, radiating <br>premium charm. Inspired by the hidden rhythms of Morse code, the <br>design infuses a touch of subtle romance into cutting-edge technology.",
    tech_b1: "The hidden rhythms <br class='pc-only'>of Morse code",

    color_config: ["ORANGE", "BLUE", "GREY", "BLACK"],

    color_title: "Stylish Shades",
    color_orange_left: "Dynamic",
    color_orange_right: "Orange",
    color_orange_text: "Dynamic Orange",

    color_blue_left: "Midnight",
    color_blue_right: "Blue",
    color_blue_text: "Midnight Blue",

    color_grey_left: "Titanium",
    color_grey_right: "Grey",
    color_grey_text: "Titanium Grey",

    color_black_left: "Ink",
    color_black_right: "Black",
    color_black_text: "Ink Black",

    slim_phone_image: "./assets/slim.png",
    tech_bg: "./assets/tech-bg.jpg",
    tech_phone_image: "./assets/tech-phone.png",
    tech_moss: "./assets/moss.png",
    color_orange_bg_image: "./assets/color-orange-bg.jpg",
    color_orange_image: "./assets/color-orange.png",
    color_blue_bg_image: "./assets/color-blue-bg.jpg",
    color_blue_image: "./assets/color-blue.png",
    color_grey_bg_image: "./assets/color-grey-bg.jpg",
    color_grey_image: "./assets/color-grey.png",
    color_black_bg_image: "./assets/color-black-bg.jpg",
    color_black_image: "./assets/color-black.png",
  },
  s9: {
    title: "PERFORMANCE",
    per_sub_title: "MediaTek Helio <span>G100</span> <br>Ultimate Processor",
    per_text:
      "As the definitive flagship silicon for 4G smartphones, it leverages <br>cutting-edge 6nm architecture to deliver elite gaming performance, <br>advanced imaging capabilities, and ultra-stable connectivity.",

    mem_sub_title: "Memory Fusion <span>4.0</span>",
    mem_text:
      "Memory Fusion delivers up to 24GB [8GB+16GB] RAM, increases the <br>number of background alive apps by 15%–20% and improves average <br>app launch speed by 20%.",

    comp_sub_title: "MemCompress",
    comp_text:
      "Compress memory for efficient usage of <br class='mb-only'>RAM and frame drops <br class='pc-only'>reduced by 30% <br class='mb-only'>when switching apps from background <br class='mb-only'>to foreground.",
    comp_percent: "<span>30</span>%",

    sche_sub_title: "AI Smart Scheduling",
    sche_text:
      "AI Intelligent Scheduling automatically categorizes background app <br class='mb-only'>processes based on your unique usage habits, ensuring highly <br class='pc-only'>efficient <br class='mb-only'>and optimized RAM allocation.",

    tdv_sub_title:
      "<span>TDV 6-Year</span> Smooth Performance <br>Certification",
    tdv_text:
      "Engineered to combat performance degradation. Rigorously tested <br class='pc-only'>over <br class='mb-only'>millions of cycles to ensure consistently smooth, lag-free <br class='pc-only'>operation for up <br class='mb-only'>to 6 full years.",

    perf_bg: "./assets/performance.jpg",
    mem_bg: "./assets/memory.jpg",
    comp_icon: "./assets/arrow-down.png",
    comp_image: "./assets/compress.jpg",
    sche_image: "./assets/schedule.png",
    tdv_bg: "./assets/tdv-bg.jpg",
    tdv_icon: "./assets/tdv-icon.png",
    tdv_phone: "./assets/tdv-phone.png",
  },
  s10: {
    brand_sub_title: "TECNO Mobile Phone <br>Security Brand",
    brand_desc:
      "Your Security, Our Mission. TECNO’s security brand to <br>offer all-round security and privacy solutions for users.",

    find_sub_title: "Find My Device",
    find_desc_1: "Remote Networking",
    find_text_1:
      "When SIM card removed, the device will automatically <br>enable network connectivity.",
    find_desc_2: "Remote Enabling",
    find_text_2: "Log in the website to enable Find My Device remotely.",

    all_sub_title: "All Scenario <br>Noise Cancellation",
    all_text_1:
      "Seamlessly integrates AI and voiceprint noise reduction technologies <br>across calls, recordings, meetings, and gaming.Instantly switch between <br>three specialized noise cancellation modes via the Dynamic Island for <br>crystal-clear audio tailored to your environment:",
    all_desc: "Setup",
    all_text_2: "Settings--Sound&Vibration--Call Noise Suppression",
    all_b1_title: "Smart NC",
    all_b1_text:
      "AI-powered noise reduction <br class='pc-only'>automatically <br class='mb-only'>optimized for <br class='pc-only'>all audio scenarios.",
    all_b2_title: "Pure Voice",
    all_b2_text:
      "Utilizes advanced voiceprint <br class='pc-only'>technology to isolate <br class='mb-only'>and <br class='pc-only'>clarify human voices during <br class='pc-only'>calls and meetings.",
    all_b3_title: "Standard NC",
    all_b3_text:
      "The reliable system <br class='pc-only'>default for everyday use.",

    dyna_sub_title: "Dynamic Port",
    dyna_text:
      "Guess what you want. Recognizes your intent even before you ask.",
    dyna_b1_title: "Smart Scheduling",
    dyna_b1_text:
      "Automatically detects <br class='mb-only'>schedules for <br class='pc-only'>one-tap <br class='mb-only'>calendar creation.",

    dyna_b2_title: "Seamless Payments",
    dyna_b2_text:
      "Integrates with PalmPay and <br class='mb-only'>OPay to display <br class='pc-only'>quick-transfer <br class='mb-only'>cards. Jump to the app with <br class='mb-only'>one <br class='pc-only'>tap for faster, easier <br class='mb-only'>payments.",

    dyna_b3_title: "Clipboard <br>Intent Recognition",
    dyna_b3_text:
      "Automatically recognizes <br class='mb-only'>the context of your <br class='pc-only'>copied <br class='mb-only'>text to suggest one-tap <br class='mb-only'>actions, eliminating <br class='pc-only'>the need <br class='mb-only'>to switch between apps.",
    dyna_b4_title: "Instant Summaries",
    dyna_b4_text:
      "Generate an Ella AI summary <br class='mb-only'>with a single <br class='pc-only'>tap immediately <br class='mb-only'>after downloading a file.",

    freelink_sub_title: "FreeLink 2.0",
    freelink_text:
      "Stay connected anytime, anywhere with offline calls and text/voice <br>messaging—no cellular network required. Enjoy a maximum outdoor <br>communication range of up to 1.5km, effectively doubling the reach <br>of the previous generation.",

    call_sub_title: "FlashCall 2.0",
    call_text:
      "FlashCall 2.0 makes communication effortless and cost-free. <br class='pc-only'>Send <br class='mb-only'>instant messages for free during any FlashCall. <br class='pc-only'>Note: Available in <br class='mb-only'>Nigeria, Kenya, Pakistan, and Ghana. For <br class='pc-only'>Flash Message, both parties <br class='mb-only'>must support the feature, <br class='pc-only'>use the same carrier, and be connected <br class='mb-only'>to 4G/5G during the call.",

    trans_sub_title: "Touch Transfer <br>With iPhone",
    trans_desc:
      "Ultra-fast iPhone & TECNO transfer. <br>One-tap share, lossless quality.",
    trans_text:
      "One-tap or device-search transfer between Transsion and iPhone, <br>with original quality and zero data cost.The solution for playable <br>LivePhoto cross-transfer, no more compression or static conversion.<br>Compatible with iPhone 7+/iOS14+, perfect for students and travelers <br>to share photos seamlessly.",

    brand_bg: "./assets/brand-bg.jpg",
    brand_icon: "./assets/tguard-icon.png",
    find_image: "./assets/find.jpg",
    all_image: "./assets/all-phone.png",
    all_icon_1: "./assets/all-icon-1.png",
    all_icon_2: "./assets/all-icon-2.png",
    all_icon_3: "./assets/all-icon-3.png",
    dynamic_bg_image: "./assets/dyna-bg.png",
    dynamic_phone_image: "./assets/phone-bg.png",
    dynamic_video: "./assets/dynamic.mp4",
    dynamic_video_poster: "./assets/dynamic-poster.jpg",
    dynamic_camera_image: "./assets/phone-camera.png",
    freelink_bg_image: "./assets/freelink-bg.jpg",
    freelink_image: "./assets/freelink.png",
    call_bg_image: "./assets/call-bg.jpg",
    call_image: "./assets/call.png",
    transfer_bg_image: "./assets/transfer.jpg",
  },
  s11: {
    title: "Disclaimers",
    texts: [
      "<span>1. </span>Some AI features may not be available in the initial software version upon product <br class='mb-only'>launch. In certain countries and regions, these AI functions will be rolled  out via OTA <br>updates. Please refer to the actual functions of your current device version.",
      "<span>2. </span>Actual performance of the AI Erase feature may vary depending on software and <br class='mb-only'>hardware configurations. The Circle to Select erase function is only supported on <br class='mb-only'>devices <br class='pc-only'>with 8GB RAM or higher. Supported device models and feature availability are <br class='mb-only'>subject to actual usage conditions.",
      "<span>3. </span>The actual communication distance of Freelink may be affected and shortened by <br class='mb-only'>obstacles, environmental factors and signal interference.",
      "<span>4. </span>FlashCall 2.0 is currently exclusive to Nigeria, Kenya, Pakistan and Ghana. To use the <br class='mb-only'>Flash Message function, both calling parties must support this feature, subscribe to the <br>same mobile carrier’s service, and stay connected to a 4G/5G network during the call.",
      "<span>5. </span>This device is not professionally waterproof. IP68/IP69 rating only provides dust and <br class='mb-only'>splash resistance. Do not submerge the device in water or expose it to any liquid. <br class='mb-only'>Liquid <br class='pc-only'>intrusion may affect audio performance, which can be restored after thorough <br class='mb-only'>drying. The dustproof and waterproof protection is not permanent. Do not charge the <br class='mb-only'>device <br class='pc-only'>when it is wet. Damage caused by liquid ingress is not covered under warranty.",
    ],
  },
};
