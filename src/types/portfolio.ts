export interface Stock {
  id: string;
  symbol: string;
  name: string;
  quantity: number;
  purchase_price: number;
  current_price: number;
  user_id: string;
  created_at: string;
}

export interface PortfolioMetrics {
  totalValue: number;
  totalGain: number;
  gainPercentage: number;
  numberOfStocks: number;
}