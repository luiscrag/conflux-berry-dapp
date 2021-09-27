// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract BFLUX  {
  string  constant public name = "Berry Conflux Token";
  string  constant public symbol = "BFLUX";
  uint8   constant public decimals = 18;
  uint256 constant public devTreasury = 10000000000000000000000; // 10 000 BFLUX
  
  
  address public owner;  
  mapping(address => uint256) public balanceOf;
  mapping(address => mapping(address => uint256)) public allowance;
  uint256 public totalSupply;
  
  event Transfer(address indexed from, address indexed to, uint256 amount);
  event Approval(address indexed from, address indexed to, uint256 amount);
  
  modifier onlyOwner() {
      require(msg.sender == owner, "Only Owner can call this function");
      _;
  }

  constructor() public {
    owner = msg.sender;
    mint(msg.sender, devTreasury);
  }

  function transfer(address recipient, uint256 amount)
    public returns (bool) {
    _transfer(msg.sender, recipient, amount);
    return true;
  }

  /**
   * @dev Requirements:
   * - `spender` cannot be the zero address.
   */
  function approve(address spender, uint256 amount) public returns (bool) {
    _approve(msg.sender, spender, amount);
    return true;
  }

  /**
   * @dev Emits an {Approval} event indicating the updated allowance. This is not
   * required by the EIP.
   *
   * Requirements:
   *
   * - `sender` and `recipient` cannot be the zero address.
   * - `sender` must have a balance of at least `amount`.
   * - the caller must have allowance for ``sender``'s tokens of at least
   * `amount`.
   */
  function transferFrom(address sender,
    address recipient,
    uint256 amount
    ) public returns (bool) {
    _transfer(sender, recipient, amount);

    uint256 currentAllowance = allowance[sender][msg.sender];
    require(
      currentAllowance >= amount,
      "CRC20: transfer amount exceeds allowance"
    );
    _approve(sender, msg.sender, currentAllowance - amount);

    return true;
  }

  /**
   * @dev Atomically increases the allowance granted to `spender` by the caller.
   *
   * Emits an {Approval} event indicating the updated allowance.
   *
   * Requirements:
   *
   * - `spender` cannot be the zero address.
   */
  function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
    _approve(
      msg.sender,
      spender,
      allowance[msg.sender][spender] + addedValue
    );
    return true;
  }

  /**
   * @dev Atomically decreases the allowance granted to `spender` by the caller.
   *
   * Emits an {Approval} event indicating the updated allowance.
   *
   * Requirements:
   *
   * - `spender` cannot be the zero address.
   * - `spender` must have allowance for the caller of at least
   * `subtractedValue`.
   */
  function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
    uint256 currentAllowance = allowance[msg.sender][spender];
    require(
      currentAllowance >= subtractedValue,
      "CRC20: decreased allowance below zero"
    );
    _approve(msg.sender, spender, currentAllowance - subtractedValue);

    return true;
  }

  /**
   * @dev Moves tokens `amount` from `sender` to `recipient`.
   *
   * This function is equivalent to {transfer}, and can be used to
   * e.g. implement automatic token fees, slashing mechanisms, etc.
   *
   * Emits a {Transfer} event.
   *
   * Requirements:
   *
   * - `sender` cannot be the zero address.
   * - `recipient` cannot be the zero address.
   * - `sender` must have a balance of at least `amount`.
   */
  function _transfer(
    address sender,
    address recipient,
    uint256 amount
  ) private  {
    require(sender != address(0), "CRC20: transfer from the zero address");
    require(recipient != address(0), "CRC20: transfer to the zero address");

    uint256 senderBalance = balanceOf[sender];
    require(senderBalance >= amount, "CRC20: transfer amount exceeds balance");
    unchecked {
        balanceOf[sender] = senderBalance - amount;
    }
    balanceOf[recipient] += amount;

    emit Transfer(sender, recipient, amount);
  }

  /** @dev Creates `amount` tokens and assigns them to `account`, increasing
   * the total supply.
   *
   * Emits a {Transfer} event with `from` set to the zero address.
   *
   * Requirements:
   *
   * - `account` cannot be the zero address.
   */
  function mint(address account, uint256 amount) public onlyOwner {
    require(account != address(0), "CRC20: mint to the zero address");
    totalSupply += amount;
    balanceOf[account] += amount;
    emit Transfer(address(0), account, amount);
  }

  /**
   * @dev Destroys `amount` tokens from `account`, reducing the
   * total supply.
   *
   * Emits a {Transfer} event with `to` set to the zero address.
   *
   * Requirements:
   *
   * - `account` cannot be the zero address.
   * - `account` must have at least `amount` tokens.
   */
  function burn(uint256 amount) public {
    require(msg.sender != address(0), "CRC20: burn from the zero address");

    uint256 accountBalance = balanceOf[msg.sender];
    require(accountBalance >= amount, "CRC20: burn amount exceeds balance");
    unchecked {
        balanceOf[msg.sender] = accountBalance - amount;
    }
    totalSupply -= amount;

    emit Transfer(msg.sender, address(0), amount);
  }

  /**
   * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
   *
   * This internal function is equivalent to `approve`, and can be used to
   * e.g. set automatic allowances for certain subsystems, etc.
   *
   * Emits an {Approval} event.
   *
   * Requirements:
   *
   * - `owner` cannot be the zero address.
   * - `spender` cannot be the zero address.
   */
  function _approve(
    address owner,
    address spender,
    uint256 amount
  ) private {
    require(owner != address(0), "CRC20: approve from the zero address");
    require(spender != address(0), "CRC20: approve to the zero address");

    allowance[owner][spender] = amount;
    emit Approval(owner, spender, amount);
  }
}
