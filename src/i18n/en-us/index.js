export default {
    api: {
        confirm: "Confirm",
        reject: "Reject",
        remember_my_decision: "Remember my decision",
        greymass_dialog_title: 'Resource Warning!',
        greymass_fuel_message: 
            "Your account doesn't have sufficient resources (CPU, NET, or RAM) to pay for your next transaction. " +
            'Don\'t worry! Telos has partnered with Greymass to proceed with your transaction using "Greymass Fuel", allowing you to continue for free.<br/><br/>' +
            'We recommend powering up your account with at least 0.5 TLOS in CPU and NET each and purchasing RAM, as this service is not supported on all dAPPs in our ecosystem. Please <a src="https://wallet.telos.net/" target="_blank">click here</a> to proceed and power up your account',
        greymass_fuel_message_fees: 
            "Your account doesn't have sufficient resources (CPU, NET, or RAM) to pay for your next transaction and it can not be processed without fees. " +
            'Telos has partnered with Greymass to proceed with your transaction using "Greymass Fuel", reducing cost significantly.<br/><br/>' +
            'Please confirm fees below to proceed.<br/><br/>' +
            '<div><center><h5><b>{fees}</b></h5></center><div><br/>' +
            'We recommend powering up your account with at least 0.5 TLOS in CPU and NET each and purchasing RAM, as this service is not supported on all dAPPs in our ecosystem. Please <a src="https://wallet.telos.net/" target="_blank">click here</a> to proceed and power up your account',        
    },
    navbar: {
        wallet: "Wallet",
        staking: "Staking (REX)",
        resources: "Resource Management",
        nfts: "NFTs",
        dapps: "dApps",
        profile: "Profile",
        logout: "Log Out",
    },
    home: {
        title: "Telos Wallet",
        subtitle: "It's Crypto Made Easy",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
    },
    resources: {
        title: "Network Resources",
        intro: "Stake CPU and NET for processing transactions. RAM is used for storing data on the blockchain.",
        used: "Used",
        total_staked: "Total Staked",
        buy: "Buy",
        add: "Add",
        buying_resources: "Buying Resources",
        resources_bought: "Resources bought"
    },
    login: {
        connect_wallet: "Connect Wallet",
        get_app: "Get App",
        resources_low: "Your resources are low",
        recommend_bying: "We recommend you buy more for 1 TLOS",
        proceed_q: "Proceed?"
    },
    streaming: {
        title: "Live Streaming Example",
        intro1: "This is the 'cpu' action on the 'eosmechanics' contract,",
        intro2: "which benchmarks CPU performance of active BPs",
        block: "Block",
        timestamp: "Timestamp",
        producer: "Producer",
        billed_cpu: "Billed CPU",
        local_format: "dddd, MMMM Do YYYY, h:mm:ss a",
    },
    settings: {
        status: "Status",
        bio: "Bio",
        save: "SAVE",
        warning: "Warning!",
        warning_msg: "Are you sure you want to show your Telos private keys? Be sure you " +
        "are in a private location and no one can see your screen. Anyone " +
        "viewing your private keys can steal your funds.",
        private_key: "Private Key",
        create_profile: "Created new profile",
        create_profile_ok: "New profile is created successfully",
        update_profile: "Updated profile",
        update_profile_ok: "Profile is updated successfully",
        account_saved: "Account is saved on your google drive",
        copied_ok: "Copied it to the clipboard successfully",
    },
    common: {
        buttons: {
            ok: 'OK',
            cancel: 'Cancel',
            reset: 'Reset',
            continue: 'Continue',
            create: 'Create',
            logout: 'Logout',
            mint: 'Mint',
            register: 'Register',
            save: 'Save',
            discard: 'Discard',
            confirm: 'Confirm',
            editProfile: 'Edit profile',
        },
    },
    forms: {
        errors: {
            accountFormat:
          'The account can contain lowercase characters only, numbers from 1 to 5 or a dot (.)',
            accountFormatBasic:
          'The account must contain 12 lowercase characters only and number from 1 to 5',
            accountLength: 'The account must contain at most 12 characters',
            accountNotAvailable: 'The account "{account}" already exists',
            accountNotExists: 'The account "{account}" does not exist',
            copyKey: 'Copy the key to a safe place',
            dateFuture: 'The date must be in the future',
            greaterOrEqualThan:
          'The value must be greater than or equal to {value}',
            lowerOrEqualThan:
          'The value must be lower than or equal to {value}',
            integer: 'Please type an integer',
            natural: 'Please type a natural number (>=0)',
            phoneFormat: 'Please type a valid phone',
            positiveInteger: 'The value must be greater than 0',
            required: 'This field is required',
            atLeast: 'You need at least {what}',
            unique: 'Repeated values are not allowed',
            token: 'The field must contain between 2 and 6 characters',
            tokenDecimals: 'The decimals must be between 2 and 9',
        },
        hints: {
            selectCountrie: 'Please select your country',
            pressToAddHobbie: 'Press enter to add a tag',
            pressToAddURL: 'Press enter to add a URL',
        },
    },
    components: {
        sign_in: "Sign-in",
        login: "Login",
        close: "Close",
        buy: "Buy",
        total: "Total",
        rate: "rate",
        max: "Max Available (liquid)",
        send: "Send",
        receive: "Receive",
        liquid: "Liquid",
        convert: "Convert",
        stake: "Stake",
        earn: "Earn",
        authentication: "Authentication",
        transaction_request: "Transaction Request",
        hide_details: "Hide Details",
        show_details: "Show Details",
        create_account: "Create Telos Account",
        critical_telos_info: "The following is your critical Telos info, please copy and paste these " +
        "values into the fields below, and store them in a safe place:",
        account_lowercase: "Account (lowercase)",
        dont_match_account: "Inputs do not match account info. Be sure to use all-lowercase account name",
        dont_match_key: "Inputs do not match private key info.",
        save: "Save",
        your_accounts: "Your Accounts",
        account_not_used: "This Google Account isn't used for any account",
        account_used_for: "This Google Account is already used for {account}",
        invalid_acc_or_key: "Invalid account or private key",
        account_exists: "Account ${account} already exists",
        cant_create_acc: "Sorry, we can't create an account now",
        account_saved: "Account is saved on your google drive. Please login with your Google Account",
        to_moonpay_text: "By Clicking 'Next' you will be taken to Moonpay to purchase Telos (TLOS) with card. " +
        "Do not alter the 'TO' or 'MEMO' field or risk losing your " +
        "funds.",
        evm_deposit: "EVM Deposit",
        deposit_1: "Deposit your TLOS into the EVM,",
        deposit_2: "fast, free and instant.",
        withdraw: "Withdraw",
        withdraw_1: "Withdraw your TLOS from the EVM,",
        withdraw_2: "fast, free and instant.",
        add_evm_network: "Add EVM Network",
        first_deposit: "NOTE: This is your first deposit so an additional “create” action " +
        "will be included",
        address_not_exist: "NOTE: The recipient address does not exist so an additional “create” " +
        "action will be included",
        dont_send_to_exchanges: "DO NOT SEND TO EXCHANGE ADDRESS (e.g. KuCoin, Gate.io etc.). THIS " +
        "WILL RESULT IN A LOSS OF FUNDS. RATHER SEND TO YOUR OWN METAMASK " +
        "ADDRESS THEN TRANSFER TO THE EXCHANGE ADDRESS.",
        create_evm_for: "Create EVM address for {account}",
        created_evm_for: "EVM address created for {account}",
        cant_deposit_more: "Cannot deposit more than native TLOS balance: {balance}",
        deposit_to_evm: "Deposit {quantity} to the EVM",
        deposited_to_evm: "{quantity} is deposited to the EVM",
        equivalent_to: "Equivalent to",
        choose_coin: "Choose coin",
        swap_disabled_goto: "Swapping has temporarily been disabled. Please go to",
        auth_required: "Authentication is required",
        conversion_failed: "Conversion failed. Make sure authentication is done correctly",
        is_converted_into: "{from} is converted into {to}",
        is_not_converted_into: "{from} is converted into {to}",
        scan_qr: "Scan QR code",
        send_or_connect: "Send money or connect",
        to_a_desktop_website: "to a desktop website",
        address_not_exist: "Address {account} does not exist",
        account_not_exist: "Account {account} does not exist",
        select_a_coin: "Select a coin",
        suggested: "Suggested",
        all_coins:"All coins",
        staking_rex:"Staking (REX)",
        available: "Available",
        deposited: "Deposited",
        lock_4_days: "This will lock your tokens for 4 days",
        withdraw_from_rex: "Withdraw {amount} TLOS from REX",
        is_staked_to_REX: "{amount} TLOS is staked to REX",
        is_withdrawn_from_REX: "{amount} TLOS is withdrawn from REX",
        select_a_coin: "Select a coin",
        send_amount: "Send Amount",
        confirm_send: "Confirm Send",
        for_ethereum_wallet_users: "Ethereum Wallet users: to view TLOS balance in wallet, add TLOS "+
        "with contract address: " +
        "0x7825e833D495F3d1c28872415a4aee339D26AC88",
        is_sent_to: "{quantity} is sent to {address}",
        failed_to_send: "Failed to send {quantity} to {address}",
        to_network: "To Network",
        memo: "Memo",
        minimun_to_transfer: "Minimum of $100 for mainnet TLOS to Ethereum Transfers",
        checking: "Checking",
        generate_your_address: "Please generate your tEVM address",
        scan_correct_token: "Please scan with correct token",
        address_not_valid: "Address {address} is not valid",
        account_not_valid: "Account {account} is not valid",
        from_network: "From Network",
        awaiting_deposits: "Awaiting New Deposits...",
        telos_evm_only: "WARNING! This a a Telos EVM address only. Do not send funds to " +
        "this address on any other network!",
        any_sym_will_mint_psym: "Any { sym } deposit sent to this " +
        "address will mint an equal number of p{ sym } " +
        "tokens on the TELOS address: { account } ",
        generate_new_address: "Please Generate New Deposit Address",
        new_address_created: "A new address is successfully created",
        address_is_generated: "New Deposit Address is generated successfully",
        deposit_confirmed: "New Deposit is confirmed successfully",
        evm_withdraw: "EVM Withdraw",
        cannot_withdraw: "Cannot withdraw more than EVM TLOS balance: {balance}",
        deposit_to_evm: "Deposit {quantity} to the EVM",
        is_withdrawn_from_evm: "{quantity} is withdrawn from the EVM",
        please_fill_the_field: "Please fill the {field}",
        failed_to_send: "Failed to send {quantity} to {address}",
        withdrew_from_evm: "Successfully withdrew {quantity} from {address}",
        minimum_amount: "Minimum amount is $20",
        cammera_access_error_1: "You need to approve access to the camera",
        cammera_access_error_2: "No suitable camera device installed",
        cammera_access_error_3: "Page is not served over HTTPS (or localhost)",
        cammera_access_error_4: "Can't access the camera. Maybe it is already in use",
        cammera_access_error_5: "Can't access the camera.",
        cammera_access_error_6: "Can't access the camera. Try using another browser.",
    },
    account: {
        profile_not_found: "Profile not found",
        account_profile: "Account profile"
    },
    balance: {
        convert: "Convert",
        purchase: "Purchase",
        warning: "WARNING!",
        warning_msg: "DO NOT USE THIS ANYWHERE EXCEPT TELOS EVM OR ELSE IT COULD RESULT IN A "+
        "LOSS OF FUNDS. THIS PRIVATE KEY IS NOT AVAILABLE.",
        i_understand: "I Understand",
        copied_ok: "Copied it to the clipboard successfully",
    },
    dapps: {
        title: "Telos Native dApps",
        placeholder: "Search dApp"
    },
    error404: {
        oops: "Oops. Nothing here..."
    }
};
