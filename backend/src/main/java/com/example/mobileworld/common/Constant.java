package com.example.mobileworld.common;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Constant {

    public interface STRATEGY {
        int LENGTH_SECURITY_KEY = 15;
    }
    public interface GET_ADMIN{
        List<String> API_ADMIN = Arrays.asList(
                "api/v1/create_strategy",
                "api/v1/update_master",
                "api/v1/account_follow_bonus");
    }

    public interface MASTER {
        List<String> API_COPIER = Arrays.asList(
                "api/v1/get_strategy",
                "api/v1/history_trades_master",
                "api/v1/link_referral",
                "api/v1/update_profile");
        int LENGTH_NAME = 10;
    }

    public interface EXPERT_TRADE_AUTHORIZATION {
        String CREATE_STRATEGY = "api/v1/create_strategy";
        String UPDATE_MASTER = "api/v1/update_master";
        String GET_LIST_STRATEGY = "api/v1/get_strategy";
        String GET_HISTORY_TRADES_MASTER = "api/v1/history_trades_master";
        String GET_HISTORY_TRADES_COPIER = "api/v1/history_trades_copier";
        String GET_PROFIT_REPORT_MASTER = "api/v1/profit_report_master"; // xem báo cáo lợi nhuận của master
        String GET_PROFIT_REPORT_COPIER = "api/v1/profit_report_copier"; // xem báo cáo lợi nhuận của copier
        String CREATE_LINK_REFERRAL = "api/v1/link_referral"; // link giới thiệu
        String GET_ACCOUNT_FOLLOW = "api/v1/account_follow"; // xem danh sách bạn bè đăng ký
        String GET_ACCOUNT_FOLLOW_BONUS = "api/v1/account_follow_bonus"; // commission thưởng trên mỗi bạn bè
        String UPDATE_PROFILE = "api/v1/update_profile";
        String UPDATE_PASSWORD = "api/v1/update_password";
    }

    public interface COPIER_AUTHORIZATION {
        String GET_LIST_STRATEGY = "api/v1/get_strategy";
        String GET_HISTORY_TRADES_MASTER = "api/v1/history_trades_master";
        String GET_PROFIT_REPORT_COPIER = "api/v1/profit_report_copier";
        String CREATE_LINK_REFERRAL = "api/v1/link_referral";
        String GET_ACCOUNT_FOLLOW = "api/v1/account_follow"; // xem danh sách bạn bè đăng ký
        String GET_ACCOUNT_FOLLOW_BONUS = "api/v1/account_follow_bonus"; // commission thưởng trên mỗi bạn bè
        String UPDATE_PROFILE = "api/v1/update_profile";
        String UPDATE_PASSWORD = "api/v1/update_password";
    }

    public interface ADMIN_AUTHORIZATION {
        String CREATE_LINK_REFERRAL = "api/v1/link_referral";
        String GET_ACCOUNT_FOLLOW = "api/v1/account_follow"; // xem danh sách bạn bè đăng ký
        String GET_ACCOUNT_FOLLOW_BONUS = "api/v1/account_follow_bonus"; // commission thưởng trên mỗi bạn bè
        String UPDATE_PROFILE = "api/v1/update_profile";
        String UPDATE_PASSWORD = "api/v1/update_password";
        
    }
}
