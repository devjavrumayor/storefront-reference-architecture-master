!function(){"use strict";$(document).ready((function(){window.resetCampaignBannerSessionToken&&window.sessionStorage.removeItem("hide_campaign_banner");var n=window.sessionStorage.getItem("hide_campaign_banner");$(".campaign-banner .close").on("click",(function(){$(".campaign-banner").addClass("d-none"),window.sessionStorage.setItem("hide_campaign_banner","1")})),(!n||n<0)&&$(".campaign-banner").removeClass("d-none")}))}();