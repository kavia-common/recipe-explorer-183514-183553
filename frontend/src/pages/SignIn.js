import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * SignIn
 * Renders the generated Sign In screen with pixel-perfect fidelity by preserving
 * the classNames and DOM hierarchy from the exported HTML.
 * Assets are served from /assets and figmaimages from /assets/figmaimages.
 */
function SignIn() {
  // Attach minimal JS interactions analogous to assets/sign-in-11-235.js
  useEffect(() => {
    const cta = document.getElementById('node-54-668');
    const forgot = document.getElementById('node-12-94');

    function onCtaClick(e) {
      e.preventDefault();
      // Keep console log to avoid layout changes
      // eslint-disable-next-line no-console
      console.log('Sign In button clicked');
    }
    function onForgotClick(e) {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log('Forgot Password clicked');
    }

    if (cta) cta.addEventListener('click', onCtaClick);
    if (forgot) forgot.addEventListener('click', onForgotClick);

    return () => {
      if (cta) cta.removeEventListener('click', onCtaClick);
      if (forgot) forgot.removeEventListener('click', onForgotClick);
    };
  }, []);

  // Import CSS globally to ensure identical measurements and layout
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    // Use public-served path
    link.href = '/assets/sign-in-11-235.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Render exact DOM extracted from HTML while adjusting asset paths to /assets/figmaimages
  return (
    <div id="screen-sign-in-11-235" className="screen-container">
      <div id="node-11-235" className="root-frame" style={{ left: '0px', top: '0px', width: '375px', height: '812px' }}>
        <div id="node-13-110" className="group" style={{ position: 'absolute', left: '30px', top: '94px', width: '155px', height: '75px' }}>
          <p id="node-12-29" className="text text-typo-60" style={{ position: 'absolute', left: '0px', top: '0px', width: '84px', height: '45px' }}>Hello,</p>
          <p id="node-12-30" className="text text-typo-61" style={{ position: 'absolute', left: '0px', top: '45px', width: '155px', height: '30px' }}>Welcome Back!</p>
        </div>

        <div id="node-30-585" className="component input-field" style={{ position: 'absolute', left: '30px', top: '226px', width: '315px', height: '81px' }}>
          <div id="node-I30-585-30-298" className="rect rect-style-30" style={{ position: 'absolute', left: '0px', top: '26px', width: '315px', height: '55px' }} />
          <p id="node-I30-585-30-300" className="text text-typo-65" style={{ position: 'absolute', left: '20px', top: '45px', width: '61px', height: '17px' }}>Enter Email</p>
          <p id="node-I30-585-30-301" className="text text-typo-66" style={{ position: 'absolute', left: '0px', top: '0px', width: '38px', height: '21px' }}>Email</p>
        </div>

        <div id="node-30-590" className="component input-field" style={{ position: 'absolute', left: '30px', top: '337px', width: '315px', height: '81px' }}>
          <div id="node-I30-590-30-298" className="rect rect-style-30" style={{ position: 'absolute', left: '0px', top: '26px', width: '315px', height: '55px' }} />
          <p id="node-I30-590-30-300" className="text text-typo-65" style={{ position: 'absolute', left: '20px', top: '45px', width: '84px', height: '17px' }}>Enter Password</p>
          <p id="node-I30-590-30-301" className="text text-typo-66" style={{ position: 'absolute', left: '0px', top: '0px', width: '107px', height: '21px' }}>Enter Password</p>
        </div>

        <div id="node-12-139" className="group" style={{ position: 'absolute', left: '90px', top: '560px', width: '195px', height: '17px' }}>
          <div id="node-12-140" className="line line-style-28" style={{ position: 'absolute', left: '0px', top: '9px', width: '50px', height: '1px' }} />
          <div id="node-12-141" className="line line-style-28" style={{ position: 'absolute', left: '145px', top: '9px', width: '50px', height: '1px' }} />
          <p id="node-12-142" className="text text-typo-64" style={{ position: 'absolute', left: '57px', top: '0px', width: '81px', height: '17px' }}>Or Sign in With</p>
        </div>

        <div id="node-13-35" className="group" style={{ position: 'absolute', left: '131px', top: '597px', width: '44px', height: '44px' }}>
          <img id="node-13-36" alt="Rectangle 642" className="img style-126" src="/assets/figmaimages/figma_image_13_36.svg" style={{ position: 'absolute', left: '0px', top: '0px', width: '44px', height: '44px', objectFit: 'cover' }} />
          <div id="node-13-48" className="component" style={{ position: 'absolute', left: '10px', top: '10px', width: '24px', height: '24px' }}>
            <img id="node-13-39" alt="Google Vector base" src="/assets/figmaimages/figma_image_13_39.svg" style={{ position: 'absolute', left: '2px', top: '2px', width: '20px', height: '20px' }} />
            <img id="node-13-42" alt="Google Vector color" src="/assets/figmaimages/figma_image_13_42.svg" style={{ position: 'absolute', left: '12px', top: '10px', width: '10px', height: '9.4141206741333px' }} />
          </div>
        </div>

        <div id="node-13-49" className="group" style={{ position: 'absolute', left: '200px', top: '597px', width: '44px', height: '44px' }}>
          <div id="node-13-50" className="rect style-126" style={{ position: 'absolute', left: '0px', top: '0px', width: '44px', height: '44px', borderRadius: '10px', background: 'var(--color-ffffff)', boxShadow: 'var(--shadow-0)' }} />
          <div id="node-13-58" className="group" style={{ position: 'absolute', left: '10px', top: '10px', width: '24px', height: '24px' }}>
            <img id="node-13-61" alt="Facebook Vector" src="/assets/figmaimages/figma_image_13_61.svg" style={{ position: 'absolute', left: '2px', top: '2px', width: '20px', height: '20px' }} />
          </div>
        </div>

        <button id="node-54-668" className="big-button" style={{ left: '30px', top: '480px', width: '315px', height: '60px' }}>
          <span id="node-I54-668-53-624" className="btn-label text-typo-58">Sign In</span>
          <img id="node-I54-668-53-625" className="btn-icon" src="/assets/figmaimages/figma_image_54_668_53_625.svg" alt="Arrow Right" />
        </button>

        <div id="node-12-91" className="group" style={{ position: 'absolute', left: '40px', top: '701px', width: '97px', height: '17px' }}>
          <a id="node-12-94" className="link-forgot text-typo-62" href="#" style={{ position: 'absolute', left: '0px', top: '0px', width: '97px', height: '17px' }}>Forgot Password?</a>
        </div>

        <p id="node-13-67" className="text text-typo-63" style={{ position: 'absolute', left: '99px', top: '759px', width: '177px', height: '17px' }}>Don’t have an account? Sign up</p>

        <div id="node-13-71" className="component status-bar" style={{ position: 'absolute', left: '0px', top: '0px', width: '375px', height: '44px' }}>
          <div id="node-I13-71-128-302" className="frame" style={{ position: 'absolute', left: '293.5px', top: '16.6px', width: '68px', height: '13px' }}>
            <img id="node-I13-71-128-309" alt="Battery Fill" src="/assets/figmaimages/figma_image_13_71_128_309.svg" style={{ position: 'absolute', left: '35.0px', top: '2.4767px', width: '18px', height: '7.666666507720947px' }} />
          </div>
          <div id="node-I13-71-128-319" className="frame" style={{ position: 'absolute', left: '0px', top: '12px', width: '180px', height: '22px' }}>
            <p id="node-I13-71-128-320" className="text text-typo-67" style={{ position: 'absolute', left: '29.5px', top: '14px', width: '37px', height: '18px' }}>19:27</p>
          </div>
        </div>

        <div id="node-42-614" className="component home-indicator" style={{ position: 'absolute', left: '0px', top: '778px', width: '375px', height: '34px' }}>
          <div id="node-I42-614-42-603" className="rect rect-style-32" style={{ position: 'absolute', left: '120px', top: '21px', width: '135px', height: '5px' }} />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
